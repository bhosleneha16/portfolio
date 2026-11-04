# Neha Bhosle — Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Material UI.

## Sections

- **Hero** — Introduction with profile photo and social links
- **About** — Background and summary
- **Skills** — Technical skills
- **Experience** — Work history
- **Projects** — Featured work
- **Education** — Academic background
- **Contact** — Ways to get in touch

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Material UI](https://mui.com/) + [Emotion](https://emotion.sh/) — components and styling
- [ESLint](https://eslint.org/) — linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the local dev server with hot reloading:

```bash
npm run dev
```

The site will be available at the URL printed in the terminal (typically http://localhost:5173).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the project |
| `npm run deploy` | Build and publish to GitHub Pages via `gh-pages` |

## Deployment

The project is configured to deploy to GitHub Pages:

```bash
npm run deploy
```

This runs the production build and publishes the `dist/` directory using [gh-pages](https://www.npmjs.com/package/gh-pages).

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other imported assets
│   ├── components/      # React components (Hero, About, Skills, etc.)
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Application entry point
│   ├── theme.ts         # Material UI theme configuration
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
└── package.json
```

## Contact

- **Email:** bhosleneha16@gmail.com
- **LinkedIn:** [neha-bhosle](https://linkedin.com/in/neha-bhosle-693593210/)

---

© Neha Bhosle. All rights reserved.
