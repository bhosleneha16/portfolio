const Experience = () => {
  const highlights = [
    'Led development of large-scale React applications in healthcare, ensuring 99.9% uptime',
    'Built reusable, scalable UI components using React, TypeScript, and Tailwind CSS, boosting efficiency by 30%',
    'Optimized app performance by 25% using Redux, TanStack Query, and strategic refactoring',
    'Mentored junior developers via code reviews, improving code quality by 35%',
    'Managed a team of 2 junior developers, assigning tasks, reviewing code, and ensuring timely delivery',
    'Led end-to-end project ownership — from requirement gathering and sprint planning to final delivery',
    'Integrated Zoom and Twilio third-party services to enhance functionality and user engagement',
    'Implemented component-level unit testing using Jest, improving overall test coverage by 40%',
    'Delivered 100% on-time sprint completion following Agile methodologies',
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <div>
                  <h3 className="experience-company">Thinkitive Technologies Pvt. Ltd</h3>
                  <p className="experience-role">Software Engineer</p>
                </div>
                <div className="experience-meta">
                  <span className="experience-date">Dec 2022 - Present</span>
                  <span className="experience-location">Pune, India</span>
                </div>
              </div>
              <ul className="experience-highlights">
                {highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
