const Education = () => {
  const education = [
    {
      degree: 'MS/M.Sc (Computer Science)',
      institution: 'Modern College of Arts, Science and Commerce, Pune',
      period: '2020 - 2022',
    },
    {
      degree: 'B.Sc (Computer Science)',
      institution: 'Modern College of Arts, Science and Commerce, Pune',
      period: '2017 - 2020',
    },
  ]

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.degree} className="education-card">
              <div className="education-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <span className="education-period">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
