# Arash Vashagh Portfolio

A personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. The site presents my machine learning, AI security, software development, healthcare AI, publications, teaching, certifications, awards, and research experience in a recruiter-friendly format.

## Overview

This portfolio is designed to provide practical evidence that I can build, evaluate, and communicate technical systems. It includes project cards, publication links, professional experience, certifications, education, honors, and contact information.

Main sections:

- **About**: brief profile and professional positioning
- **Skills**: machine learning, AI security, software development, cloud, signal processing, biomedical research, and technical tools
- **Projects**: applied AI, adversarial machine learning, agentic AI, medical AI, reinforcement learning security, and software projects
- **Publications**: adversarial machine learning surveys and IEEE healthcare AI publications
- **Experience**: Ondiway CTO, UNB research and teaching, lab leadership, conference reviewing, and education work
- **Honors & Awards**: competitive graduate scholarship and related recognition
- **Educator**: Persian AI Security and Adversarial Machine Learning course
- **Contact**: email, LinkedIn, GitHub, Google Scholar, and resume access

## Featured Projects

### Response Profiles for Vision-Language Models

An adversarial image detector that analyzes semantic response patterns from a frozen vision-language model. [arXiv preprint](https://arxiv.org/abs/2610.10436).

### GraphRectify

A graph-based framework for transferring adversarial example detectors across neural network backbones. [arXiv preprint](https://arxiv.org/abs/2610.10423).

### EvasionRL

A deployed reinforcement learning security application demonstrating test-time evasion attacks against a DQN controlled MountainCar agent through clean and attacked rollouts.

### PaperWise AI

A deployed research paper RAG and LLMOps assistant supporting PDF upload, citation grounded question answering, structured summaries, paper comparison, reviewer concerns, and PDF note export. [Live app](https://paperwise-ai.streamlit.app/) · [GitHub](https://github.com/arashVsh/research-paper-ragops).

### CalmChat

An AI-assisted conversation prototype with web and desktop clients, a Java messaging backend, and optional NLP-based respectful rewrite suggestions. [Live app](https://calmchat.info/) · [GitHub](https://github.com/arashVsh/CalmChat).

### ProblemPatch

A full-stack campus issue reporting platform with an interactive map, status updates, and a facilities staff dashboard.

### PromptShield

An adversarial image detection prototype for frozen vision-language models using structured prompts and semantic consistency features.

### AttackBench

A desktop adversarial machine learning application connecting a JavaFX frontend to a Python and PyTorch backend through FastAPI. Users can generate attacks and inspect changes in model predictions.

### PhishGuard

A mobile phishing detection application using URL validation, DNS lookup, SSL inspection, machine learning prediction, and confidence based feedback.

### Enhanced Atrial Fibrillation Detection with Diffusion Models

A healthcare AI research project using ECG preprocessing, two dimensional Poincaré plot representations, diffusion model based augmentation, and convolutional neural networks for atrial fibrillation detection.

The project compared diffusion models with generative adversarial networks for minority class augmentation and was published at the **2023 IEEE 13th International Conference on Computer and Knowledge Engineering**.

### Atrial Fibrillation Detection with GAN Based Data Augmentation

A healthcare AI research project using ECG signal preprocessing, two dimensional Poincaré recurrence plots, GAN based minority class augmentation, and convolutional neural networks.

The project was published at the **2023 IEEE 31st International Conference on Electrical Engineering**.

## Publications

The portfolio currently includes the following published and preprint research:

- **Evaluating Security Claims in LLM Systems: A Survey of Adversarial Attacks and Defenses** — Preprints.org, 2026

- **Detecting Adversarial Images through Response Profiles of Vision-Language Models** — arXiv, 2026

- **GraphRectify: Graph-Based Transfer of Adversarial Example Detectors Across Neural Networks** — arXiv, 2026

- **ChronosAttack: Adversarial Tool Scheduling Attacks on LLM Agents** — Research Square, 2026

- **CohortHijack: Robustness of Single-Cell Annotation to Companion Cell Removal** — arXiv, 2026

- **ConformalShift: Targeted Event Reordering Against Adaptive ECG Monitoring** — arXiv, 2026

- **Defense Against Adversarial Attacks: Foundations, Strategies, and Future Directions**  
  Preprints.org, 2026

- **Recent Advances in Adversarial Attacks on Model Utility, Privacy, and Explainability: A Comprehensive Survey**  
  TechRxiv, 2026

- **Enhanced Atrial Fibrillation Detection via Data Augmentation with Diffusion Model**  
  IEEE ICCKE, 2023

- **Atrial Fibrillation Detection Using Deep Learning with GAN-Based Data Augmentation**  
  IEEE ICEE, 2023

The site also presents ongoing work on multimodal fusion attacks and adaptive adversarial example verification.

## Honors and Awards

### Competitive Graduate Scholarship Package

Awarded by the **University of New Brunswick School of Graduate Studies** in May 2024.

The competitive scholarship package was valued at **CAD 10,000** and was awarded based on academic qualifications and a proposed research project. It reduced annual tuition by CAD 5,000 for two years of full-time master’s study at the University of New Brunswick.

A link to the official scholarship letter is included in the portfolio.

## Skills

The portfolio highlights skills across the following areas:

### Machine Learning and Agentic AI

- PyTorch
- Scikit-learn
- Natural Language Processing
- Retrieval Augmented Generation
- LLMOps
- Agentic AI
- Reinforcement Learning
- OpenAI API

### AI Security

- Adversarial Machine Learning
- Evasion Attacks
- Adversarial Detection
- Robustness Evaluation
- Trustworthy AI
- Phishing Detection

### Healthcare AI and Research

- Signal Processing
- Biomedical Signal Processing
- Biomedical Research
- Medical AI
- ECG Analysis
- Data Augmentation
- Diffusion Models
- Generative Adversarial Networks

### Software Development

- Python
- Java
- Kotlin
- C++
- JavaScript
- React
- FastAPI
- Flask
- REST APIs
- SQL
- SQLite

### Cloud and Tools

- AWS
- Microsoft Azure
- Google Cloud
- Docker
- Git
- GitHub
- Streamlit
- MLflow
- Jupyter

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React and React Icons
- **Static assets**: resume PDF, profile photo, scholarship letter, university logos, and lab logos

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
