import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const Experience = () => {
  const highlights = [
    "Led development of large-scale React applications in healthcare, ensuring 99.9% uptime",
    "Built reusable, scalable UI components using React, TypeScript, and Tailwind CSS, boosting efficiency by 30%",
    "Optimized app performance by 25% using Redux, TanStack Query, and strategic refactoring",
    "Mentored junior developers via code reviews, improving code quality by 35%",
    "Managed a team of 2 junior developers, assigning tasks, reviewing code, and ensuring timely delivery",
    "Led end-to-end project ownership — from requirement gathering and sprint planning to final delivery",
    "Integrated Zoom and Twilio third-party services to enhance functionality and user engagement",
    "Implemented component-level unit testing using Jest, improving overall test coverage by 40%",
    "Delivered 100% on-time sprint completion following Agile methodologies",
  ];

  return (
    <Box component="section" id="experience" className="section experience">
      <Box className="container">
        <Typography
          variant="sectionTitle"
          className="section-title"
          sx={{ mb: "48px", position: "relative" }}
        >
          Professional Experience
        </Typography>
        <Box className="timeline">
          <Box className="timeline-item">
            <Box className="timeline-marker" />
            <Box className="timeline-content">
              <Box className="experience-header">
                <Box>
                  <Typography
                    variant="experienceCompany"
                    className="experience-company"
                    sx={{ mb: "4px" }}
                  >
                    Thinkitive Technologies Pvt. Ltd
                  </Typography>
                  <Typography
                    variant="experienceRole"
                    className="experience-role"
                  >
                    Software Engineer
                  </Typography>
                </Box>
                <Box className="experience-meta">
                  <Typography
                    variant="experienceDate"
                    className="experience-date"
                  >
                    Dec 2022 - Present
                  </Typography>
                  <Typography
                    variant="experienceLocation"
                    className="experience-location"
                  >
                    Pune, India
                  </Typography>
                </Box>
              </Box>
              <List
                component="ul"
                className="experience-highlights"
                disablePadding
                sx={{ listStyle: "none" }}
              >
                {highlights.map((item, index) => (
                  <Typography
                    key={index}
                    variant="experienceHighlight"
                    className="experience-highlights-item"
                  >
                    {item}
                  </Typography>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
