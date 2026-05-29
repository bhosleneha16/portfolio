import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const Projects = () => {
  const projects = [
    {
      title: "RESTORE",
      subtitle: "Healthcare & Rehabilitation Platform",
      description:
        "A modern healthcare dashboard serving 10,000+ patients efficiently with a 95+ Lighthouse score.",
      highlights: [
        "Designed and implemented a modern healthcare dashboard using React.js and TypeScript",
        "Built responsive webpages with Material UI, achieving 98% browser compatibility",
        "Developed a dynamic form builder using React Hook Form with real-time validation",
        "Enhanced performance with a 95+ Lighthouse score through code splitting and lazy loading",
        "Reduced bundle size by 45% using dynamic imports",
      ],
      tags: ["React", "TypeScript", "Material UI", "React Hook Form"],
    },
    {
      title: "MIND CLINIC",
      subtitle: "Mental Health Platform",
      description:
        "An online mental health platform for therapy and counseling with appointment booking and role-based access.",
      highlights: [
        "Led the project end-to-end, managing timelines, client communication, and a team of 2 developers",
        "Built dynamic React components with efficient API integration",
        "Improved load time via lazy loading and memoization",
        "Implemented secure user authentication and role-based access control",
        "Integrated appointment booking flow with calendar sync",
      ],
      tags: ["React", "TypeScript", "API Integration", "Authentication"],
    },
  ];

  return (
    <Box component="section" id="projects" className="section projects">
      <Box className="container">
        <Typography
          variant="sectionTitle"
          className="section-title"
          sx={{ mb: "48px", position: "relative" }}
        >
          Projects
        </Typography>
        <Box className="projects-grid">
          {projects.map((project) => (
            <Box key={project.title} className="project-card">
              <Box className="project-card-header">
                <Box className="project-icon">
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
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </Box>
              </Box>
              <Typography
                variant="projectTitle"
                className="project-title"
                sx={{ mb: "4px" }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="projectSubtitle"
                className="project-subtitle"
                sx={{ mb: "12px" }}
              >
                {project.subtitle}
              </Typography>
              <Typography
                variant="projectDescription"
                className="project-description"
                sx={{ mb: "16px" }}
              >
                {project.description}
              </Typography>
              <List
                component="ul"
                className="project-highlights"
                disablePadding
                sx={{ listStyle: "none", mb: "20px" }}
              >
                {project.highlights.map((item, index) => (
                  <Typography key={index} variant="projectHighlight">
                    {item}
                  </Typography>
                ))}
              </List>
              <Box className="project-tags">
                {project.tags.map((tag) => (
                  <Typography
                    key={tag}
                    variant="projectTag"
                    className="project-tag"
                  >
                    {tag}
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

export default Projects;
