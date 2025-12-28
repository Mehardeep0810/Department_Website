import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Computer Applications</h3>
          <p>
            Department of Computer Applications focused on quality education
            and innovation in computing.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Admissions</li>
            <li>Programs</li>
            <li>Faculty</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Programs</h3>
          <ul>
            <li>BCA</li>
            <li>MCA</li>
            <li>BSc IT</li>
            <li>MSc IT</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Chitkara University</li>
            <li>+91 98765 43210</li>
            <li>info@chitkara.edu.in</li>
            <li>Punjab, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Department of Computer Applications | Chitkara University
      </div>
    </footer>
  );
};

export default Footer;