import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Book Summary Hub</h1>
        <p>Discover the wisdom of books in just a few minutes.</p>
        <Link to="/books" className="btn">Start Exploring</Link>
      </section>

      {/* Featured Books Section */}
      <section className="container">
        <h2>📚 Featured Books</h2>
        <p>Check out some of the best book summaries available:</p>
        <ul className="book-list">
          <li><strong>Atomic Habits</strong> - James Clear</li>
          <li><strong>The 5 AM Club</strong> - Robin Sharma</li>
          <li><strong>Thinking, Fast and Slow</strong> - Daniel Kahneman</li>
          <li><strong>Deep Work</strong> - Cal Newport</li>
          <li><strong>The Power of Now</strong> - Eckhart Tolle</li>
        </ul>
      </section>

      {/* Why Read Summaries? */}
      <section className="why-summaries">
        <h2>📖 Why Read Book Summaries?</h2>
        <p>Book summaries provide you with key insights in just minutes:</p>
        <ul>
          <li>✔️ Save time while learning valuable lessons</li>
          <li>✔️ Get an overview before deciding to read the full book</li>
          <li>✔️ Strengthen your knowledge by revisiting key points</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>⭐ What Our Readers Say</h2>
        <div className="testimonial">
          <p>“This website helped me build better habits in just weeks! A must-visit for book lovers.”</p>
          <p>- Sarah Johnson</p>
        </div>
        <div className="testimonial">
          <p>“I don't have time to read every book, but these summaries give me the knowledge I need fast!”</p>
          <p>- Mike Anderson</p>
        </div>
        <div className="testimonial">
          <p>“A great way to learn new concepts. Highly recommended!”</p>
          <p>- Emily Davis</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>🚀 How It Works</h2>
        <ol>
          <li><strong>Browse:</strong> Explore our library of book summaries.</li>
          <li><strong>Read:</strong> Get key insights from books in 10 minutes.</li>
          <li><strong>Apply:</strong> Use the lessons to improve your life.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Gain Knowledge Faster?</h2>
        <p>Start exploring book summaries today and supercharge your learning.</p>
        <Link to="/books" className="btn">Explore Now</Link>
      </section>
    </div>
  );
};

export default Home;