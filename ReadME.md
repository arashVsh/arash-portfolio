# Arash Vashagh Portfolio

A personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. The site presents my machine learning, AI security, software development, healthcare AI, publications, teaching, certifications, and research experience in a recruiter-friendly format.

## Overview

This portfolio is designed to show practical evidence that I can build, not just describe technical work. It includes project cards, publication links, professional experience, certifications, education, and contact links.

Main sections:

- **About**: brief profile and professional positioning
- **Skills**: machine learning, AI security, software development, cloud, and tools
- **Projects**: applied AI, adversarial ML, agentic AI, medical AI, and security projects
- **Publications**: survey work and IEEE healthcare AI publications
- **Experience**: research, teaching, lab leadership, reviewing, and education work
- **Educator**: Persian AI Security and Adversarial Machine Learning course
- **Contact**: email, LinkedIn, GitHub, and resume access

## Featured Projects

### JobPilot AI
Agentic job-search and application assistant with resume-based matching, job discovery, application tracking, follow-up reminders, and outreach email drafting.

### EvasionRL
Deployed reinforcement learning security demo showing test-time evasion attacks against a DQN MountainCar agent.

### PaperWise AI
Research paper RAG / LLMOps assistant for PDF upload, citation-grounded question answering, paper comparison, and PDF note export.

### PromptShield
Adversarial detection system for vision-language models. The related manuscript and code are currently under review at NeurIPS 2026.

### Atrial Fibrillation Detection with Diffusion-Based Data Augmentation
Medical AI research project using ECG-derived cardiac signal preprocessing, 2D Poincare image representations, diffusion-model-based augmentation, and CNN classifiers. Published as an IEEE conference paper.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Deployment-ready assets**: resume PDF, profile photo, university/lab logos

## Project Structure

```text
.
├── public/
│   ├── Arash Vashagh - Resume.pdf
│   ├── profile.jpg
│   └── logos/
│       ├── tsai-lab.png
│       ├── unb-logo.jpg
│       └── iut-logo.png
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Customization Notes

Most portfolio content is currently stored directly inside `src/App.tsx` in arrays and objects such as:

- `profile`
- `skills`
- `projects`
- `publications`
- `experiences`
- `certifications`
- `educatorCourse`

To update the portfolio, edit those objects and arrays in `App.tsx`.

## Assets

Place static files in the `public/` folder.

Recommended files:

```text
public/profile.jpg
public/Arash Vashagh - Resume.pdf
public/logos/tsai-lab.png
public/logos/unb-logo.jpg
public/logos/iut-logo.png
```

The resume link in `App.tsx` currently points to:

```ts
resumeUrl: "/Arash Vashagh - Resume.pdf"
```

So the resume PDF should use the same file name inside the `public` folder.

## Deployment

This project can be deployed on platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

For most deployments, use:

```bash
npm run build
```

and deploy the generated `dist/` folder.

## Purpose

This portfolio supports applications for roles such as:

- Machine Learning Engineer
- Applied AI Engineer
- AI Developer
- Software Developer
- Cybersecurity / AI Security Engineer
- Healthcare AI / Medical ML Engineer
- Platform or cloud-adjacent AI engineering roles

## Contact

- **Email**: arash.vashagh@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/arash-vashagh-23084923a/
- **GitHub**: https://github.com/arashVsh
- **Google Scholar**: https://scholar.google.com/citations?user=yOVk_hcAAAAJ&hl=en
