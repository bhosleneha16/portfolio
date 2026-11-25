import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const RESUME_FILE_ID = "1oc9HuqxpelSj7viVIMNin9paC5nicYTu";
const RESUME_PDF_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;

const getInitialTheme = (): boolean => {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Some browsers cache the content behind a backdrop-filter element as a
    // snapshot, so the page behind the navbar doesn't repaint when CSS
    // variables change via an attribute selector. Force a detach/reattach of
    // the whole body to invalidate that snapshot and repaint everything.
    document.body.style.display = "none";
    void document.body.offsetHeight;
    document.body.style.display = "";
  }, [isDark]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const win = window.open(RESUME_PDF_URL, "_blank", "noopener,noreferrer");
    if (win) {
      // Drive preview is cross-origin so we can't call win.print() directly.
      // The Drive viewer toolbar exposes a Print button; browsers also expose Ctrl/Cmd+P.
      win.focus();
    }
  };

  return (
    <Box component="nav" className="navbar">
      <Box className="nav-container">
        <Box component="a" href="#" className="nav-logo">
          NB
        </Box>
        <Box className="nav-right">
          <Box
            component="button"
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <Box component="span" />
            <Box component="span" />
            <Box component="span" />
          </Box>
          <List
            component="ul"
            className={`nav-links ${isOpen ? "active" : ""}`}
            disablePadding
            sx={{ listStyle: "none" }}
          >
            {navLinks.map((link) => (
              <ListItem
                key={link.href}
                component="li"
                disablePadding
                disableGutters
                sx={{ width: "auto", display: "block" }}
              >
                <Box
                  component="a"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    activeSection === link.href.slice(1) ? "active" : ""
                  }
                >
                  {link.label}
                </Box>
              </ListItem>
            ))}
            <ListItem
              component="li"
              disablePadding
              disableGutters
              sx={{ width: "auto", display: "block" }}
            >
              <Box
                component="a"
                href={RESUME_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
              >
                Resume
              </Box>
            </ListItem>
          </List>
          <Box
            component="button"
            className="theme-toggle"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
