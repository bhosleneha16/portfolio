const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Software Engineer based in Pune, India, with over
              3 years of experience building scalable, user-centric web
              applications. I specialize in React, TypeScript, and modern
              frontend technologies.
            </p>
            <p>
              Currently working at Thinkitive Technologies, I lead the
              development of large-scale healthcare applications, mentor junior
              developers, and collaborate closely with cross-functional teams to
              deliver impactful solutions.
            </p>
            <p>
              I thrive in Agile environments and am dedicated to creating
              software that aligns with business objectives while enhancing user
              experience. I'm a two-time "Above And Beyond Of The Year" award
              winner (2024 & 2025).
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Patients Served</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">95+</span>
              <span className="stat-label">Lighthouse Score</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2x</span>
              <span className="stat-label">Award Winner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
