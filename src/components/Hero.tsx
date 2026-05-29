import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import profilePhoto from "../assets/profile.jpg";

const Hero = () => {
  return (
    <Box component="section" className="hero">
      <Box className="hero-content">
        <Typography variant="heroGreeting" sx={{ mb: "8px" }}>
          Hello, I'm
        </Typography>
        <Typography variant="heroName" sx={{ mb: "8px" }}>
          Neha Bhosle
        </Typography>
        <Typography variant="heroTitle" sx={{ mb: "20px" }}>
          Software Engineer
        </Typography>
        <Typography
          variant="heroDescription"
          sx={{ maxWidth: 520, mb: "32px" }}
        >
          Experienced software engineer with 3+ years in developing scalable,
          user-centric web applications. Proficient in React, TypeScript,
          JavaScript, and modern web technologies.
        </Typography>
        <Stack
          direction="row"
          className="hero-buttons"
          spacing={0}
          useFlexGap
          sx={{ gap: "inherit" }}
        >
          <Box component="a" href="#contact" className="btn btn-primary">
            Get In Touch
          </Box>
          <Box
            component="a"
            href="#projects"
            className="btn btn-outline"
            ml={2}
          >
            View Projects
          </Box>
        </Stack>
        <Stack
          direction="row"
          className="hero-socials"
          spacing={0}
          useFlexGap
          sx={{ gap: "inherit" }}
        >
          <Box
            component="a"
            href="https://linkedin.com/in/neha-bhosle-693593210/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Box>
          <Box
            component="a"
            href="mailto:bhosleneha16@gmail.com"
            aria-label="Email"
            ml={2}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </Box>
        </Stack>
      </Box>
      <Box className="hero-visual">
        <Box className="hero-blob">
          <Box
            component="img"
            src={profilePhoto}
            alt="Neha Bhosle"
            className="hero-photo"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
