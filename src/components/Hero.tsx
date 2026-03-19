import profilePhoto from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Neha Bhosle</h1>
        <h2 className="hero-title">Software Engineer</h2>
        <p className="hero-description">
          Experienced software engineer with 3+ years in developing scalable,
          user-centric web applications. Proficient in React, TypeScript,
          JavaScript, and modern web technologies.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </div>
        <div className="hero-socials">
          <a
            href="https://linkedin.com/in/neha-bhosle-693593210/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a
            href="mailto:bhosleneha16@gmail.com"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-blob">
          <img src={profilePhoto} alt="Neha Bhosle" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}

export default Hero
