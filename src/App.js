import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Your Name</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Chau Dat Danh</h1>
          <p>A Passionate Data Engineer | Analytic Engineer</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Highly motivated and results-driven Data Engineer in designing, implementing, and optimizing data pipelines and solutions. Proven ability to extract actionable insights from complex datasets, leading to improved business decision-making. Seeking a challenging role where I can leverage my expertise in ETL/ELT, automation, and database technologies to drive significant data-driven outcomes.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">Oracle Database</div>
          <div className="skill-card">SQL</div>
          <div className="skill-card">ETL / ELT</div>
          {/* Add more skills */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Build Oracle Data Warehouse</h3>
            <p>Worked on building an Enterprise Oracle Data Warehouse</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Project description goes here</p>
          </div>
          {/* Add more projects */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>Feel free to reach out to me for collaborations or opportunities!</p>
          <div className="social-links">
            {/* Add your social media links */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="www.linkedin.com/in/danh-chau-053860355" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Chau Dat Danh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
