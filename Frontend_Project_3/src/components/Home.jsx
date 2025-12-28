import "../styles/Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show back-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container">
          <div className="hero-content">
            <h1>Department of Computer Applications</h1>
            <p>
              Empowering future technology leaders through innovative education,
              cutting-edge research, and industry-relevant skills development.
            </p>
            <div className="hero-buttons">
              {/* Explore Programs */}
              <a
                href="#programs-section"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("programs-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Programs
              </a>

              {/* Upcoming Events */}
              <a
                href="#events-section"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("events-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section section-padding">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2>Welcome to Our Department</h2>
              <p>
                The Department of Computer Applications is committed to
                excellence in education, research, and innovation.
              </p>
              <p>
                Our experienced faculty, state-of-the-art laboratories, and
                industry partnerships ensure graduates are career-ready.
              </p>
              <a href="#" className="btn">Learn More About Us</a>
            </div>

            <div className="welcome-image">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Students in computer lab"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section-padding">
        <div className="container">
          <h2 className="section-title">Why Choose Our Department</h2>
          <br />
          <br />
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Expert Faculty</h3>
              <p>Learn from experienced academicians and industry experts.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Modern Labs</h3>
              <p>State-of-the-art labs with latest tools and technologies.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Industry Partnerships</h3>
              <p>Strong industry ties for internships and placements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs-section" className="programs-section section-padding">
        <div className="container">
          <h2 className="section-title">Our Academic Programs</h2><br /><br />

          <div className="programs-grid">
            <div className="program-card">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" alt="BCA" />
              <h3>BCA</h3>
              <p>3-year undergraduate program in Computer Applications.</p>
            </div>

            <div className="program-card">
              <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0" alt="MCA" />
              <h3>MCA</h3>
              <p>2-year postgraduate program with advanced technologies.</p>
            </div>

            <div className="program-card">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166" alt="Certificates" />
              <h3>Certificate Programs</h3>
              <p>Short-term courses in emerging technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events-section" className="events-section section-padding">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <p>Stay tuned for workshops, seminars, and conferences hosted by our department.</p>
          <ul>
            <li>📅 Tech Workshop - Jan 15, 2026</li>
            <li>📅 AI Seminar - Feb 10, 2026</li>
            <li>📅 Career Fair - Mar 5, 2026</li>
          </ul>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div><h3>1500+</h3><p>Graduates</p></div>
          <div><h3>95%</h3><p>Placement Rate</p></div>
          <div><h3>50+</h3><p>Industry Partners</p></div>
          <div><h3>15+</h3><p>Years of Excellence</p></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="form-section section-padding">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>📍 Chitkara University, Punjab</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ computerdepartment@chitkara.edu.in</p>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
              <select>
                <option>Select Program</option>
                <option>BCA</option>
                <option>MCA</option>
                <option>Certificate</option>
              </select>
              <textarea rows="5" placeholder="Message" required />
              <button className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          className="btn back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ⬆ Back to Top
        </button>
      )}

    </div>
  );
};

export default Home;
