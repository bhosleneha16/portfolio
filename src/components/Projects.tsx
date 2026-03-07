const Projects = () => {
  const projects = [
    {
      title: 'RESTORE',
      subtitle: 'Healthcare & Rehabilitation Platform',
      description:
        'A modern healthcare dashboard serving 10,000+ patients efficiently with a 95+ Lighthouse score.',
      highlights: [
        'Designed and implemented a modern healthcare dashboard using React.js and TypeScript',
        'Built responsive webpages with Material UI, achieving 98% browser compatibility',
        'Developed a dynamic form builder using React Hook Form with real-time validation',
        'Enhanced performance with a 95+ Lighthouse score through code splitting and lazy loading',
        'Reduced bundle size by 45% using dynamic imports',
      ],
      tags: ['React', 'TypeScript', 'Material UI', 'React Hook Form'],
    },
    {
      title: 'MIND CLINIC',
      subtitle: 'Mental Health Platform',
      description:
        'An online mental health platform for therapy and counseling with appointment booking and role-based access.',
      highlights: [
        'Led the project end-to-end, managing timelines, client communication, and a team of 2 developers',
        'Built dynamic React components with efficient API integration',
        'Improved load time via lazy loading and memoization',
        'Implemented secure user authentication and role-based access control',
        'Integrated appointment booking flow with calendar sync',
      ],
      tags: ['React', 'TypeScript', 'API Integration', 'Authentication'],
    },
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-card-header">
                <div className="project-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
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

export default Projects
