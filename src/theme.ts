import { createTheme } from "@mui/material/styles";
import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heroGreeting: CSSProperties;
    heroName: CSSProperties;
    heroTitle: CSSProperties;
    heroDescription: CSSProperties;
    sectionTitle: CSSProperties;
    aboutText: CSSProperties;
    statNumber: CSSProperties;
    statLabel: CSSProperties;
    experienceCompany: CSSProperties;
    experienceRole: CSSProperties;
    experienceDate: CSSProperties;
    experienceLocation: CSSProperties;
    experienceHighlight: CSSProperties;
    skillCategoryTitle: CSSProperties;
    skillTag: CSSProperties;
    projectTitle: CSSProperties;
    projectSubtitle: CSSProperties;
    projectDescription: CSSProperties;
    projectHighlight: CSSProperties;
    projectTag: CSSProperties;
    educationDegree: CSSProperties;
    educationInstitution: CSSProperties;
    educationPeriod: CSSProperties;
    contactDescription: CSSProperties;
    contactLabel: CSSProperties;
    contactValue: CSSProperties;
  }
  interface TypographyVariantsOptions {
    heroGreeting?: CSSProperties;
    heroName?: CSSProperties;
    heroTitle?: CSSProperties;
    heroDescription?: CSSProperties;
    sectionTitle?: CSSProperties;
    aboutText?: CSSProperties;
    statNumber?: CSSProperties;
    statLabel?: CSSProperties;
    experienceCompany?: CSSProperties;
    experienceRole?: CSSProperties;
    experienceDate?: CSSProperties;
    experienceLocation?: CSSProperties;
    experienceHighlight?: CSSProperties;
    skillCategoryTitle?: CSSProperties;
    skillTag?: CSSProperties;
    projectTitle?: CSSProperties;
    projectSubtitle?: CSSProperties;
    projectDescription?: CSSProperties;
    projectHighlight?: CSSProperties;
    projectTag?: CSSProperties;
    educationDegree?: CSSProperties;
    educationInstitution?: CSSProperties;
    educationPeriod?: CSSProperties;
    contactDescription?: CSSProperties;
    contactLabel?: CSSProperties;
    contactValue?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heroGreeting: true;
    heroName: true;
    heroTitle: true;
    heroDescription: true;
    sectionTitle: true;
    aboutText: true;
    statNumber: true;
    statLabel: true;
    experienceCompany: true;
    experienceRole: true;
    experienceDate: true;
    experienceLocation: true;
    experienceHighlight: true;
    skillCategoryTitle: true;
    skillTag: true;
    projectTitle: true;
    projectSubtitle: true;
    projectDescription: true;
    projectHighlight: true;
    projectTag: true;
    educationDegree: true;
    educationInstitution: true;
    educationPeriod: true;
    contactDescription: true;
    contactLabel: true;
    contactValue: true;
  }
}

const FONT_FAMILY = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: FONT_FAMILY,
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-1.5px",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    heroGreeting: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.1rem",
      fontWeight: 500,
      color: "var(--primary)",
    },
    heroName: {
      fontFamily: FONT_FAMILY,
      fontSize: "3.5rem",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-1.5px",
      color: "var(--text)",
    },
    heroTitle: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "var(--text-secondary)",
    },
    heroDescription: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.05rem",
      lineHeight: 1.7,
      color: "var(--text-secondary)",
    },
    sectionTitle: {
      fontFamily: FONT_FAMILY,
      fontSize: "2rem",
      fontWeight: 700,
      textAlign: "center",
      color: "var(--text)",
    },
    aboutText: {
      fontFamily: FONT_FAMILY,
      fontSize: "1rem",
      lineHeight: 1.8,
      color: "var(--text-secondary)",
    },
    statNumber: {
      fontFamily: FONT_FAMILY,
      display: "block",
      fontSize: "2rem",
      fontWeight: 800,
      color: "var(--primary)",
    },
    statLabel: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.85rem",
      fontWeight: 500,
      color: "var(--text-secondary)",
    },
    experienceCompany: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "var(--text)",
    },
    experienceRole: {
      fontFamily: FONT_FAMILY,
      fontSize: "1rem",
      fontWeight: 600,
      color: "var(--primary)",
    },
    experienceDate: {
      fontFamily: FONT_FAMILY,
      display: "block",
      fontSize: "0.9rem",
      fontWeight: 600,
      color: "var(--text-secondary)",
    },
    experienceLocation: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.85rem",
      color: "var(--text-secondary)",
    },
    experienceHighlight: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.93rem",
      lineHeight: 1.6,
      color: "var(--text-secondary)",
    },
    skillCategoryTitle: {
      fontFamily: FONT_FAMILY,
      fontSize: "1rem",
      fontWeight: 700,
      color: "var(--text)",
    },
    skillTag: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.85rem",
      fontWeight: 500,
      color: "var(--primary-dark)",
    },
    projectTitle: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.3rem",
      fontWeight: 700,
      color: "var(--text)",
    },
    projectSubtitle: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.9rem",
      fontWeight: 500,
      color: "var(--primary)",
    },
    projectDescription: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.93rem",
      lineHeight: 1.6,
      color: "var(--text-secondary)",
    },
    projectHighlight: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.88rem",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
    },
    projectTag: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.8rem",
      fontWeight: 500,
      color: "var(--primary)",
    },
    educationDegree: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.1rem",
      fontWeight: 700,
      color: "var(--text)",
    },
    educationInstitution: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.9rem",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
    },
    educationPeriod: {
      fontFamily: FONT_FAMILY,
      display: "inline-block",
      fontSize: "0.85rem",
      fontWeight: 500,
      color: "var(--primary-dark)",
    },
    contactDescription: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.05rem",
      lineHeight: 1.7,
      color: "var(--text-secondary)",
    },
    contactLabel: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.8rem",
      fontWeight: 500,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
    },
    contactValue: {
      fontFamily: FONT_FAMILY,
      fontSize: "0.88rem",
      fontWeight: 600,
      color: "var(--text)",
      wordBreak: "break-word",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          heroGreeting: "p",
          heroName: "h1",
          heroTitle: "h2",
          heroDescription: "p",
          sectionTitle: "h2",
          aboutText: "p",
          statNumber: "span",
          statLabel: "span",
          experienceCompany: "h3",
          experienceRole: "p",
          experienceDate: "span",
          experienceLocation: "span",
          experienceHighlight: "li",
          skillCategoryTitle: "h3",
          skillTag: "span",
          projectTitle: "h3",
          projectSubtitle: "p",
          projectDescription: "p",
          projectHighlight: "li",
          projectTag: "span",
          educationDegree: "h3",
          educationInstitution: "p",
          educationPeriod: "span",
          contactDescription: "p",
          contactLabel: "span",
          contactValue: "span",
        },
      },
      styleOverrides: {
        root: { fontFamily: FONT_FAMILY },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { fontFamily: FONT_FAMILY },
      },
    },
  },
});

export default theme;
