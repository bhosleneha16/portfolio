import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "10K+", label: "Patients Served" },
    { number: "95+", label: "Lighthouse Score" },
    { number: "2x", label: "Award Winner" },
  ];

  return (
    <Box component="section" id="about" className="section about">
      <Box className="container">
        <Typography
          variant="sectionTitle"
          className="section-title"
          sx={{ mb: "48px", position: "relative" }}
        >
          About Me
        </Typography>
        <Box className="about-content">
          <Box className="about-text">
            <Typography variant="aboutText" sx={{ mb: "16px" }}>
              I'm a passionate Software Engineer based in Pune, India, with over
              3+ years of experience building scalable, user-centric web
              applications. I specialize in React, TypeScript, and modern
              frontend technologies.
            </Typography>
            <Typography variant="aboutText" sx={{ mb: "16px" }}>
              Currently working at Thinkitive Technologies, I lead the
              development of large-scale healthcare applications, mentor junior
              developers, and collaborate closely with cross-functional teams to
              deliver impactful solutions.
            </Typography>
            <Typography variant="aboutText" sx={{ mb: "16px" }}>
              I thrive in Agile environments and am dedicated to creating
              software that aligns with business objectives while enhancing user
              experience. I'm a two-time "Above And Beyond Of The Year" award
              winner (2024 & 2025).
            </Typography>
          </Box>
          <Box className="about-stats">
            {stats.map((stat) => (
              <Box key={stat.label} className="stat-card">
                <Typography variant="statNumber" sx={{ mb: "4px" }}>
                  {stat.number}
                </Typography>
                <Typography variant="statLabel">{stat.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
