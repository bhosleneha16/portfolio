import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Contact = () => {
  const cards = [
    {
      href: "mailto:bhosleneha16@gmail.com",
      label: "Email",
      value: "bhosleneha16@gmail.com",
      icon: (
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
      ),
    },
    {
      href: "tel:+918237317684",
      label: "Phone",
      value: "+91-8237317684",
      icon: (
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
    },
    {
      href: "https://linkedin.com/in/neha-bhosle-693593210/",
      label: "LinkedIn",
      value: "neha-bhosle",
      external: true,
      icon: (
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
      ),
    },
    {
      label: "Location",
      value: "Pune, India",
      icon: (
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
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
  ];

  return (
    <Box component="section" id="contact" className="section contact">
      <Box className="container">
        <Typography
          variant="sectionTitle"
          className="section-title"
          sx={{ mb: "48px", position: "relative" }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="contactDescription"
          className="contact-description"
          sx={{ maxWidth: 500, mx: "auto", mt: "-24px", mb: "40px" }}
        >
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </Typography>
        <Box className="contact-cards">
          {cards.map((card) => {
            const inner = (
              <>
                <Box className="contact-icon">{card.icon}</Box>
                <Typography
                  variant="contactLabel"
                  className="contact-label"
                  sx={{ mb: "6px" }}
                >
                  {card.label}
                </Typography>
                <Typography variant="contactValue" className="contact-value">
                  {card.value}
                </Typography>
              </>
            );
            return card.href ? (
              <Box
                key={card.label}
                component="a"
                href={card.href}
                {...(card.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="contact-card"
              >
                {inner}
              </Box>
            ) : (
              <Box key={card.label} className="contact-card">
                {inner}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
