// App.js - Main component
import React, { useState, useEffect } from "react";
import "./App.css"; // You'll need to create this CSS file with the styles
import emailjs from "@emailjs/browser";

import { useRef} from "react"
// Import FontAwesome
// Make sure to install: npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faTools,
  faDatabase,
  faPenFancy,
  faBlog,
  faDumbbell,
  faBars,
  faExternalLinkAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [ subject, setSubject] = useState("")
  const form = useRef(); // form ref
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    message: "",
    success: false
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("Yq4wCIlDYLKA8AysE");
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      form_name : name,
      form_email : email,
      // to_name : "Harsha",
      message : message
    }
    emailjs
      .send('service_206ux2p', 'template_0zns35q', templateParams, 'Yq4wCIlDYLKA8AysE')
      .then(
        () => {
          console.log('SUCCESS!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="App">
      {/* Header */}
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              Harsha Vardhan
            </a>
            <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
              <a href="#about" onClick={() => scrollToSection("#about")}>
                About
              </a>
              <a href="#skills" onClick={() => scrollToSection("#skills")}>
                Skills
              </a>
              <a
                href="#experience"
                onClick={() => scrollToSection("#experience")}
              >
                Experience
              </a>
              <a href="#projects" onClick={() => scrollToSection("#projects")}>
                Projects
              </a>
              <a
                href="#education"
                onClick={() => scrollToSection("#education")}
              >
                Education
              </a>
              <a href="#contact" onClick={() => scrollToSection("#contact")}>
                Contact
              </a>
            </div>
            <div className="mobile-menu" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Harsha Vardhan</h1>
            <p>Software Engineer specializing in Full Stack Development</p>
            <a
              href="#contact"
              className="btn"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </a>
            <div className="social-icons">
              <a
                href="https://linkedin.com/in/harsha-javvaji-7a5794191/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/harshajavvaji"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:harshajavvaji04@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div
              className="about-img"
              style={{
                height: "250px",
                width: "250px",
                overflow: "hidden",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f0f0f0",
                backgroundColor: "white",
              }}
            >
              <img
                src="/profile.png"
                alt="Harsha Vardhan"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <div className="about-text">
              <h3>
                Software Engineer with expertise in Full Stack Development
              </h3>
              <p>
                I am a passionate Software Engineer with experience in building
                robust and scalable web applications. My journey in tech began
                at IIITDM Kancheepuram, where I cultivated a strong foundation
                in electronics and programming.
              </p>
              <p>
                Currently working at Transformative Learning Solutions, I
                specialize in creating efficient and user-friendly web
                applications using modern technologies like React.js, Next.js,
                Node.js, and AWS services.
              </p>
              <p>
                I thrive on solving complex problems and have a keen eye for
                performance optimization and user experience. My goal is to
                develop solutions that not only meet technical requirements but
                also provide exceptional value to end-users.
              </p>
              <a
                href="#contact"
                className="btn"
                onClick={() => scrollToSection("#contact")}
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="gray-bg">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>
                <FontAwesomeIcon icon={faCode} /> Languages
              </h3>
              <div className="skill-list">
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>
                <FontAwesomeIcon icon={faLaptopCode} /> Technologies
              </h3>
              <div className="skill-list">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">AWS DynamoDB</span>
                <span className="skill-tag">AWS Lambda</span>
                <span className="skill-tag">AWS S3</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>
                <FontAwesomeIcon icon={faTools} /> Tools
              </h3>
              <div className="skill-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Lighthouse</span>
                <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>
                <FontAwesomeIcon icon={faDatabase} /> Databases
              </h3>
              <div className="skill-list">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <p className="date">October 2023 - Present</p>
                <h4>Transformative Learning Solutions, Gurgaon</h4>
                <h5>Page Builder:</h5>
                <ul>
                  <li>
                    Engineered Add, Edit, and Copy Page APIs handling 500+ daily
                    requests with Express and AWS DynamoDB
                  </li>
                  <li>
                    Architected React and Redux state management system,
                    reducing page load times by 45%
                  </li>
                  <li>
                    Developed a replacement for PageFly that decreased speed
                    index by 30% and improved Core Web Vitals scores by 25%
                  </li>
                  <li>
                    Designed flexible component system supporting 15+ unique
                    canvas elements with full CRUD functionality
                  </li>
                </ul>
                <h5>Inventrack:</h5>
                <ul>
                  <li>
                    Implemented QR code generation APIs processing 1000+ codes
                    daily with optimized browser print integration
                  </li>
                  <li>
                    Established batch update system reducing manual data entry
                    time by 75% across 3 warehouses
                  </li>
                  <li>
                    Integrated performance monitoring achieving 99.9% system
                    uptime and response time under 200ms
                  </li>
                  <li>
                    Boosted warehouse efficiency by 40% in US and India
                    locations by transforming Excel tracking to QR scanning
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item right">
              <div className="timeline-content">
                <h3>Student Trainee (Internship)</h3>
                <p className="date">August 2022 - May 2023</p>
                <h4>Nokia Solutions and Networks, Chennai</h4>
                <h5>Network Management System:</h5>
                <ul>
                  <li>
                    Built analytics dashboard using React.js, visualizing data
                    from 200+ network nodes simultaneously
                  </li>
                  <li>
                    Programmed server-side rendering techniques resulting in 60%
                    faster initial page load times
                  </li>
                </ul>
                <h5>Performance Optimization:</h5>
                <ul>
                  <li>
                    Executed lazy loading and code splitting strategies,
                    reducing bundle size from 4.2MB to 1.8MB
                  </li>
                  <li>
                    Formulated efficient API integration protocols to display
                    real-time data from 12+ different network sources
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <p className="date">January 2023 - Ongoing</p>
                <h4>HTA Insights Platform (Freelance), Remote</h4>
                <ul>
                  <li>
                    Delivered a healthcare assessment platform using Next.js,
                    featuring dual admin/customer dashboards used by 25+
                    professionals
                  </li>
                  <li>
                    Integrated Supabase securing authentication for 100+ users
                    with multi-level access protocols
                  </li>
                  <li>
                    Crafted responsive, component-based UI with Tailwind CSS
                    achieving 97% mobile usability score
                  </li>
                  <li>
                    Conceptualized user flows enabling healthcare professionals
                    to analyze 15+ metrics across 4 treatment categories
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="gray-bg">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-img">
                <FontAwesomeIcon icon={faPenFancy} />
              </div>
              <div className="project-content">
                <h3>Promptopia</h3>
                <p>
                  AI prompting tool built with Next.js, Tailwind CSS, and
                  MongoDB. Features full CRUD functionality across 5 core
                  features with custom user profile management.
                </p>
                <div className="project-links">
                  <a
                    href="https://promtopia-smoky.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </a>
                  <a
                    href="https://github.com/harshajavvaji"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img">
                <FontAwesomeIcon icon={faBlog} />
              </div>
              <div className="project-content">
                <h3>Blogit</h3>
                <p>
                  Full stack blogging platform with React, Express.js, and
                  MongoDB supporting comprehensive content management. Features
                  secure JWT authentication and multi-level nested comment
                  system.
                </p>
                <div className="project-links">
                  <a
                    href="https://bloggit-frontend.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </a>
                  <a
                    href="https://github.com/harshajavvaji"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-img">
                <FontAwesomeIcon icon={faDumbbell} />
              </div>
              <div className="project-content">
                <h3>Gym Membership Management System</h3>
                <p>
                  Role-based gym management app with React.js, Node.js,
                  Express.js for 3 distinct user access levels. Features RESTful
                  APIs with JWT authentication and automated membership checks.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/harshajavvaji"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <h3>IIITDM Kancheepuram</h3>
            <p className="degree">
              B.Tech - Electronics and Communication Engineering
            </p>
            <p>GPA: 7.65</p>
            <p className="date">July 2019 - June 2023</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="gray-bg">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-form">
            {/* {formStatus.message && (
              <div className={`form-message ${formStatus.success ? "success" : "error"}`}>
                {formStatus.message}
              </div>
            )} */}
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  // name="user_name"
                  className="form-control"
                  placeholder="Your Name"
                  onChange={(e) => {setName(e.target.value)}}
                  required
                  value={name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  // name="user_email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  // name="subject"
                  value={subject}
                  onChange={(e) => {setSubject(e.target.value)}}
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  // name="message"
                  value={message}
                  onChange={(e) => {setMessage(e.target.value)}}
                  className="form-control"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="form-btn"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <a href="#" className="logo">
              Harsha Vardhan
            </a>
            <div className="footer-links">
              <a href="#about" onClick={() => scrollToSection("#about")}>
                About
              </a>
              <a href="#skills" onClick={() => scrollToSection("#skills")}>
                Skills
              </a>
              <a
                href="#experience"
                onClick={() => scrollToSection("#experience")}
              >
                Experience
              </a>
              <a href="#projects" onClick={() => scrollToSection("#projects")}>
                Projects
              </a>
              <a
                href="#education"
                onClick={() => scrollToSection("#education")}
              >
                Education
              </a>
              <a href="#contact" onClick={() => scrollToSection("#contact")}>
                Contact
              </a>
            </div>
            <div className="footer-social">
              <a
                href="https://linkedin.com/in/harsha-javvaji-7a5794191/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/harshajavvaji"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:harshajavvaji04@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Harsha Vardhan. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
