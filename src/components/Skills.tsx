const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Redux', 'TanStack Query'],
    },
    {
      title: 'UI Libraries',
      skills: ['Material UI', 'Tailwind CSS'],
    },
    {
      title: 'Tools & Testing',
      skills: ['Git', 'Jest', 'Webpack', 'Vite', 'ESLint'],
    },
    {
      title: 'Methods & Integrations',
      skills: ['Agile / Scrum', 'Zoom API', 'Twilio'],
    },
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
