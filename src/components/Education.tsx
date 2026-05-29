import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Education = () => {
  const education = [
    {
      degree: "MS/M.Sc (Computer Science)",
      institution: "Modern College of Arts, Science and Commerce, Pune",
      period: "2020 - 2022",
    },
    {
      degree: "B.Sc (Computer Science)",
      institution: "Modern College of Arts, Science and Commerce, Pune",
      period: "2017 - 2020",
    },
  ];

  return (
    <Box component="section" id="education" className="section education">
      <Box className="container">
        <Typography
          variant="sectionTitle"
          className="section-title"
          sx={{ mb: "48px", position: "relative" }}
        >
          Education
        </Typography>
        <Box className="education-grid">
          {education.map((edu) => (
            <Box key={edu.degree} className="education-card">
              <Box className="education-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </Box>
              <Typography
                variant="educationDegree"
                className="education-degree"
                sx={{ mb: "8px" }}
              >
                {edu.degree}
              </Typography>
              <Typography
                variant="educationInstitution"
                className="education-institution"
                sx={{ mb: "12px" }}
              >
                {edu.institution}
              </Typography>
              <Typography
                variant="educationPeriod"
                className="education-period"
              >
                {edu.period}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
