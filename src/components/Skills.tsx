import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Redux",
        "TanStack Query",
      ],
    },
    {
      title: "UI Libraries",
      skills: ["Material UI", "Tailwind CSS"],
    },
    {
      title: "Tools & Testing",
      skills: ["Git", "Jest", "Webpack", "Vite", "ESLint"],
    },
    {
      title: "Methods & Integrations",
      skills: ["Agile / Scrum", "Zoom API", "Twilio"],
    },
  ];

  return (
    <Box component="section" id="skills" className="section skills">
      <Box className="container">
        <Typography
          variant="sectionTitle"
          className="section-title"
          sx={{ mb: "48px", position: "relative" }}
        >
          Skills
        </Typography>
        <Box className="skills-grid">
          {skillCategories.map((category) => (
            <Box key={category.title} className="skill-category">
              <Typography
                variant="skillCategoryTitle"
                className="skill-category-title"
                sx={{ mb: "16px" }}
              >
                {category.title}
              </Typography>
              <Box className="skill-tags">
                {category.skills.map((skill) => (
                  <Typography
                    key={skill}
                    variant="skillTag"
                    className="skill-tag"
                  >
                    {skill}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
