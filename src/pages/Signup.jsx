import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWelcomeEmail = () => {
    const templateParams = {
      user_name: formData.name, // ✅ Matches EmailJS template
      to_email: formData.email, // ✅ Must match the "To" field in EmailJS
    };

    console.log("📩 Sending email with:", templateParams);

    emailjs
      .send(
        "service_hcqmmxj", // ✅ Your EmailJS Service ID
        "template_jr28i9d", // ✅ Your EmailJS Template ID
        templateParams,
        "OavxfvoT-OwSuEP3E" // ✅ Your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log(
            "✅ Email sent successfully!",
            response.status,
            response.text
          );

          // ✅ Show success popup
          alert("🎉 Welcome Email Sent Successfully! Check your inbox. 📩");
        },
        (error) => {
          console.error("❌ Failed to send email:", error);

          // ❌ Show error popup
          alert("⚠️ Failed to send email. Please try again.");
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    console.log("User Signed Up:", formData);

    // Send Welcome Email
    sendWelcomeEmail();

    // Navigate to Home Page
    navigate("/");

    // Clear form
    setFormData({ name: "", email: "", password: "" });
    setError("");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
