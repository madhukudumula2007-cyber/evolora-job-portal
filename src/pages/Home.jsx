
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const categories = [
    {
      name: "Development",
      count: "120+ Jobs",
      icon: "💻",
      description: "Build websites, applications and software solutions.",
      roles: "Frontend · Backend · Java",
      search: "Development"
    },
    {
      name: "Design",
      count: "85+ Jobs",
      icon: "🎨",
      description: "Create beautiful and engaging digital experiences.",
      roles: "UI/UX · Graphic · Product",
      search: "Design"
    },
    {
      name: "Marketing",
      count: "60+ Jobs",
      icon: "📢",
      description: "Grow brands and connect with wider audiences.",
      roles: "SEO · Content · Digital",
      search: "Marketing"
    },
    {
      name: "Data Science",
      count: "95+ Jobs",
      icon: "📊",
      description: "Discover insights and build intelligent solutions.",
      roles: "Analytics · ML · Python",
      search: "Data Science"
    },
    {
      name: "Business",
      count: "45+ Jobs",
      icon: "💼",
      description: "Turn business challenges into better decisions.",
      roles: "Analyst · Operations · HR",
      search: "Business"
    },
    {
      name: "Human Resources",
      count: "30+ Jobs",
      icon: "👥",
      description: "Connect people with opportunities and build teams.",
      roles: "Recruitment · HR · Payroll",
      search: "HR Executive"
    }
  ];

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-tag">
            YOUR CAREER, YOUR FUTURE
          </span>

          <h1>
            Find work that
            <br />
            <span>moves you forward.</span>
          </h1>

          <p>
            Explore opportunities, connect with great companies
            and discover a career that matches your ambitions.
          </p>

          <div className="search-box">

            <input
              type="text"
              placeholder="Job title or keyword"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <input
              type="text"
              placeholder="Preferred location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <Link
              to={`/jobs?search=${encodeURIComponent(search)}&location=${encodeURIComponent(location)}`}
              className="search-button"
            >
              Search Jobs
            </Link>

          </div>

          <p className="popular-searches">
            Popular: Developer · Designer · Data Analyst · Intern
          </p>

        </div>

        {/* EVOLORA HERO IMAGE */}
        <div className="hero-visual evolora-hero-visual">

          <img
            src="/images/evolora-career.png"
            alt="Evolora - Where Your Career Evolves"
            className="evolora-career-image"
          />

        </div>

      </section>

      {/* CATEGORIES SECTION */}
      <section className="categories-section">

        <div className="section-heading">

          <div>
            <span className="section-tag">
              EXPLORE POSSIBILITIES
            </span>

            <h2>Explore Career Categories</h2>

            <p className="category-subtitle">
              Find opportunities that match your interests and skills.
            </p>
          </div>

          <Link to="/jobs" className="view-all">
            View all jobs →
          </Link>

        </div>

        <div className="category-grid">

          {categories.map((category, index) => (

            <Link
              to={`/jobs?search=${encodeURIComponent(category.search)}`}
              className={`category-card category-card-${index + 1}`}
              key={category.name}
            >

              <div className="category-card-top">

                <div className="category-icon">
                  {category.icon}
                </div>

                <span className="category-count">
                  {category.count}
                </span>

              </div>

              <h3>{category.name}</h3>

              <p className="category-description">
                {category.description}
              </p>

              <div className="category-roles">
                {category.roles}
              </div>

              <div className="category-explore">
                Explore jobs <span>→</span>
              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* FEATURED SECTION */}
      <section className="featured-section">

        <div className="featured-content">

          <span className="section-tag">
            START SOMETHING NEW
          </span>

          <h2>
            Opportunities are closer than you think.
          </h2>

          <p>
            Take the next step in your professional journey.
            Explore our available openings and find your fit.
          </p>

          <Link to="/jobs" className="featured-button">
            Explore opportunities →
          </Link>

        </div>

        {/* NEW GROW WITH PURPOSE IMAGE */}
        <div className="featured-illustration">

          <img
            src="/images/grow-with-purpose.png"
            alt="Grow with purpose - career growth illustration"
          />

        </div>

      </section>

    </div>
  );
}

export default Home;
