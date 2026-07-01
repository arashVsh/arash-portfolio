import { useState, type ComponentType } from "react";
import { motion } from "framer-motion";

import { FaYoutube } from "react-icons/fa";
import {
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
  ShieldCheck,
  BrainCircuit,
  Code2,
  Cloud,
  Award,
  BookOpen,
  Users,
  Menu,
  X,
} from "lucide-react";

type IconType = ComponentType<{ size?: number; className?: string }>;

type SkillGroup = {
  title: string;
  icon: IconType;
  items: string[];
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tech: string[];
  github?: string;
  paper?: string;
  imageDescription: string;
};

type Publication = {
  title: string;
  venue: string;
  description: string;
  link: string;
};

type Experience = {
  role: string;
  org: string;
  date: string;
  points: string[];
  link?: string;
  links?: {
    label: string;
    url: string;
  }[];
};

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const profile = {
  name: "Arash Vashagh",
  title: "Machine Learning Engineer | Software Developer | Cybersecurity Builder",
  location: "Fredericton, NB, Canada",
  email: "arash.vashagh@gmail.com",
  linkedin: "https://www.linkedin.com/in/arash-vashagh-23084923a/",
  github: "https://github.com/arashVsh",
  resumeUrl: "/Arash Vashagh - Resume.pdf",
  googleScholar: "https://scholar.google.com/citations?user=yOVk_hcAAAAJ&hl=en",
  shortBio:
    "I turn complex AI and cybersecurity ideas into practical tools people can use. My work combines machine learning, software engineering, APIs, mobile apps, cloud tools, and a strong security mindset. I am completing my MSc at UNB and looking for industry roles where I can build reliable products, not just publish papers.",
};

const navItems = ["About", "Skills", "Projects", "Publications", "Experience", "Educator", "Contact"];

const skills: SkillGroup[] = [
  {
    title: "Machine Learning & Agentic AI",
    icon: BrainCircuit,
    items: [
      "PyTorch",
      "Scikit-learn",
      "NLP",
      "RAG/LLMOps",
      "Agentic AI",
      "Reinforcement Learning",
      "OpenAI API",
    ],
  },
  {
    title: "AI Security",
    icon: ShieldCheck,
    items: [
      "Adversarial Machine Learning",
      "Evasion Attacks",
      "Adversarial Detection",
      "Robustness Evaluation",
      "Phishing Detection",
      "Trustworthy AI",
    ],
  },
  {
    title: "Software & Web Development",
    icon: Code2,
    items: [
      "Python",
      "Java",
      "Kotlin",
      "C++",
      "JavaScript",
      "React",
      "FastAPI",
      "Flask",
      "REST APIs",
      "SQL/SQLite",
    ],
  },
  {
    title: "Cloud, Apps & Tools",
    icon: Cloud,
    items: [
      "Streamlit",
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Git/GitHub",
      "Jupyter",
      "MLflow",
    ],
  },
];

const projects: Project[] = [

  {
    title: "JobPilot AI",
    subtitle: "Agentic Job Search and Application Assistant",
    description:
      "An agentic job-search assistant, currently under development, that helps users upload a resume, select target industries and locations, discover relevant job postings, track applications, and draft personalized outreach emails.",
    impact:
      "Built a multi-agent workflow with job discovery, resume-based fit scoring, location and salary filtering, rejected-job debugging, persistent SQLite tracking, follow-up reminders, agent activity logs, application reports, and company-specific email drafting.",
    tech: [
      "Python",
      "Streamlit",
      "SQLite",
      "OpenAI API",
      "SerpAPI",
      "Tavily API",
      "Pandas",
      "Agentic AI",
      "RAG",
    ],
    github: "https://github.com/arashVsh/jobpilot_ai_mvp",
    imageDescription:
      "Suggested image: an agentic job-search dashboard showing resume upload, job filters, matched job cards, fit scores, rejected-job debug logs, and an email draft panel.",
  },
  {
    title: "EvasionRL",
    subtitle: "Real-Time Evasion Attacks on Reinforcement Learning Agents",
    description:
      "A deployed Streamlit app that demonstrates test-time evasion attacks against a trained DQN-controlled MountainCar agent by perturbing the robot's observations.",
    impact:
      "Built a full DRL security demo with clean-vs-attacked rollouts, FGSM/PGD/random observation attacks, custom cloud-safe visualization, browser-side playback, and final attack summaries for user interpretation.",
    tech: [
      "Python",
      "PyTorch",
      "Stable-Baselines3",
      "Gymnasium",
      "Streamlit",
      "NumPy",
      "PIL",
      "Adversarial ML",
      "Deep Reinforcement Learning",
    ],
    github: "https://github.com/arashVsh/EvasionRL",
    paper: "https://arashvsh-evasionrl-app-najahp.streamlit.app/",
    imageDescription:
      "Suggested image: two side-by-side MountainCar agents, one clean and one under adversarial observation attack, with a playback panel and final robustness summary.",
  },
  {
    title: "PaperWise AI",
    subtitle: "Research Paper RAG / LLMOps Assistant",
    description:
      "A public web app that helps users upload research papers, ask citation-grounded questions, compare papers, and export answers as PDF notes.",
    impact:
      "Implemented PDF ingestion, text extraction, TF-IDF retrieval, OpenAI API integration, offline fallback, suggested questions, and retrieval metrics.",
    tech: ["Python", "Streamlit", "Scikit-learn", "OpenAI API", "pypdf", "ReportLab"],
    github: "https://github.com/arashVsh/research-paper-ragops",
    paper: "https://paperwise-ai.streamlit.app/",
    imageDescription:
      "Suggested image: a research assistant interface with PDF upload, question answering, citations, and export button.",
  },

  {
    title: "PromptShield",
    subtitle: "Adversarial Detection for Vision-Language Models",
    description:
      "A practical ML security system that detects manipulated images before they can fool vision-language models. My paper along with my code are under review at NeurIPS 2026.",
    impact: "Built the full pipeline: feature extraction, detector training, attack evaluation, ablations, and cross-model testing.",
    tech: ["Python", "PyTorch", "OpenCLIP", "NumPy", "Scikit-learn"],
    github: "https://github.com/arashVsh/VLM_SourceCode",
    imageDescription:
      "Suggested image: a clean abstract graphic showing an image encoder connected to text prompts, semantic similarity scores, and a detector output.",
  },
  {
    title: "AttackBench",
    subtitle: "Adversarial Attack Visualization Tool",
    description:
      "A hands-on desktop tool that lets users generate adversarial attacks and immediately see how model predictions change.",
    impact: "Connected a JavaFX interface to a Python/PyTorch backend through FastAPI, turning ML experiments into an interactive app.",
    tech: ["Java", "JavaFX", "Python", "PyTorch", "FastAPI"],
    github: "https://github.com/arashVsh/AttackBench---Scripts",
    imageDescription:
      "Suggested image: a screenshot-style UI mockup showing original image, adversarial image, confidence bars, and attack settings.",
  },
  {
    title: "PhishGuard",
    subtitle: "Phishing URL Detection App",
    description:
      "A mobile security app that helps users check suspicious links with validation, DNS lookup, SSL checks, and ML prediction.",
    impact: "Built the Android client, backend API, detection logic, and confidence-based feedback flow.",
    tech: ["Kotlin", "Python", "Flask", "Scikit-learn", "Retrofit"],
    github: "https://github.com/arashVsh/PhishGuard",
    imageDescription:
      "Suggested image: a mobile app screenshot mockup showing a URL input field, risk score, and safety recommendation.",
  },
];



const publications: Publication[] = [
  {
    title: "Recent Advances in Adversarial Attacks on Model Utility, Privacy, and Explainability: A Comprehensive Survey",
    venue: "TechRxiv preprint",
    description:
      "First-author survey proposing a unified multidimensional threat model for utility-harmed, privacy-harmed, and explainability-harmed attacks across the ML lifecycle.",
    link: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.177272853.30003431/v1",
  },
  {
    title: "Enhanced Atrial Fibrillation (AF) Detection via Data Augmentation with Diffusion Model",
    venue: "Google Scholar record",
    description: "Research work completed during undergraduate research at Isfahan University of Technology.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yOVk_hcAAAAJ&citation_for_view=yOVk_hcAAAAJ:u5HHmVD_uO8C",
  },
  {
    title: "Atrial Fibrillation (AF) Detection Using Deep Learning with GAN-based Data Augmentation",
    venue: "Google Scholar record",
    description: "Research work completed during undergraduate research at Isfahan University of Technology.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yOVk_hcAAAAJ&citation_for_view=yOVk_hcAAAAJ:u-x6o8ySG0sC",
  },

];



const experiences: Experience[] = [
  {
    role: "Graduate Research Assistant / Team Lead",
    org: "University of New Brunswick & Trustworthy and Secure AI Lab",
    date: "Sep 2024 - Present",
    points: [
      "Conduct MSc thesis research in adversarial machine learning, focusing on attacks, detection, robustness, and trustworthy AI.",
      "Co-authored a survey on adversarial attacks and another survey on adversarial defense mechanisms.",
      "Proposed and implemented adversarial detection mechanisms currently under internal faculty review.",
      "Develop an adversarial attack on multimodal fusion models, with manuscript in progress.",
      "Coordinate graduate student work and manage TSAI Lab updates and educational content.",
    ],
    links: [
      {
        label: "Adversarial Attacks Survey",
        url: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.177272853.30003431/v1",
      },
      {
        label: "TSAI Lab LinkedIn",
        url: "https://www.linkedin.com/company/trustworthy-and-secure-ai-tsai-lab/?viewAsMember=true",
      },
    ],
  },
  {
    role: "Graduate Teaching Assistant",
    org: "University of New Brunswick",
    date: "Jan 2025 - Apr 2026",
    points: [
      "Supported Software Engineering, Data Communication and Network Modeling, and Data Science for Big Data Analytics courses.",
      "Helped students with Java, Python, programming concepts, debugging, and technical problem solving.",
      "Courses: Software Engineering, Data Communication and Network Modeling, and Data Science for Big Data Analytics.",
    ],
  },
  {
    role: "Conference Reviewer",
    org: "ArtInHCI 2024 and BIBE 2024",
    date: "Jul 2024 - Oct 2024",
    points: [
      "Reviewed manuscripts and provided structured technical feedback for international conferences.",
      "Evaluated research quality, clarity, methodology, and technical contribution.",
    ],
    links: [
      {
        label: "ArtInHCI 2024 Certificate",
        url: "https://drive.google.com/file/d/18Jl1Mu6-fi-272sEjHUOpTdb3qWVf0DJ/view?usp=drive_link",
      },
      {
        label: "BIBE 2024 Certificate",
        url: "https://drive.google.com/file/d/1qcew0MJE69DjEmTelrJihG1ffeAVpHj7/view?usp=drive_link",
      },
    ],
  },
  {
    role: "Research Assistant",
    org: "Isfahan University of Technology",
    date: "Feb 2021 - Feb 2024",
    points: [
      "Conducted machine learning and healthcare research resulting in two IEEE publications.",
      "Worked on model design, data preprocessing, experimental evaluation, paper writing, and conference presentation.",
    ],
    links: [
      {
        label: "IEEE Publication 1",
        url: "https://ieeexplore.ieee.org/abstract/document/10326310",
      },
      {
        label: "IEEE Publication 2",
        url: "https://ieeexplore.ieee.org/abstract/document/10334666",
      },
    ],
  },
  {
    role: "Teaching Assistant",
    org: "Isfahan University of Technology",
    date: "Feb 2021 - Feb 2024",
    points: [
      "Supported Artificial Intelligence, Embedded Systems, Data Structures, and programming labs.",
      "Gave tutorials and graded assignments in C++, Java, and Python courses.",
    ],
  },
  {
    role: "Voluntary Educator",
    org: "AI Security and Adversarial Machine Learning Course",
    date: "Jun 2026 - Present",
    points: [
      "Create Persian technical course materials on AI security and adversarial machine learning.",
      "Develop slides, scripts, videos, and GitHub materials for Persian-speaking learners facing language barriers.",
    ],
    links: [
      {
        label: "YouTube Playlist",
        url: "https://youtube.com/playlist?list=PLYxTF848CZLmN1wPNhX5gKc4g4DSRafZE&si=mGru-L7j3YX1JNZC",
      },
    ],
  },
];

const certifications: string[] = [
  "AWS Certified AI Practitioner",
  "AWS Certified Cloud Practitioner",
  "Microsoft AI-900",
  "Microsoft AZ-900",
  "Microsoft SC-900",
  "Microsoft DP-900",
  "DeepLearning.AI - Agentic AI",
  "CompTIA Security+",
  "CompTIA Data+",
  "CompTIA Project Management Essentials",
  "Google Cloud Digital Leader - Results Pending",
  "CompTIA DataSys+ - Results Pending",
];


const educatorCourse = {
  title: "AI Security and Adversarial Machine Learning Course",
  subtitle: "Persian technical course for AI security learners",
  description:
    "I am creating a Persian technical course on AI Security and Adversarial Machine Learning to support Persian-speaking learners who face language barriers when studying advanced AI topics.",
  details: [
    "Developing slides, scripts, and course materials on machine learning foundations for adversarial machine learning.",
    "Covering topics such as classification, loss functions, gradients, gradient descent, and later adversarial attacks and defenses.",
  ],
  youtube:
    "https://youtube.com/playlist?list=PLYxTF848CZLmN1wPNhX5gKc4g4DSRafZE&si=mGru-L7j3YX1JNZC",
  github: "https://github.com/arashVsh/AML_Course_Persian",
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

function LinkButton({ href, children, variant = "primary" }: LinkButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-slate-800"
      : "border border-slate-200 bg-white/70 text-slate-800 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700";

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#cffafe,transparent_35%),linear-gradient(180deg,#f8fafc,#ffffff)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-lg font-black tracking-tight text-slate-950">
            Arash<span className="text-cyan-600">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-cyan-600">
                {item}
              </a>
            ))}
          </div>

          <button className="rounded-xl border border-slate-200 p-2 md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-16">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex flex-col gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm font-semibold text-cyan-700">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Available for full-time roles immediately
            </div>

            <div className="pl-4 text-cyan-600">
              Open to relocation across Canada
            </div>
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
            Started with C++ at 15. Still hooked! ☕
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{profile.shortBio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#projects">See What I Built</LinkButton>
            <LinkButton href={profile.resumeUrl} variant="secondary">
              Download Resume <ExternalLink size={16} />
            </LinkButton>
            <LinkButton href="#contact" variant="secondary">
              Contact Me <Mail size={16} />
            </LinkButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> {profile.location}</span>
            <a className="inline-flex items-center gap-2 hover:text-cyan-700" href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16} /> LinkedIn</a>
            <a
              className="inline-flex items-center gap-2 hover:text-cyan-700"
              href={profile.googleScholar}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} /> Google Scholar
            </a>
            <a className="inline-flex items-center gap-2 hover:text-cyan-700" href={profile.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /> GitHub</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-cyan-200 via-blue-100 to-white blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/80 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur md:-mt-24"><div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
            <img
              src="/profile.jpg"
              alt="Arash Vashagh"
              className="mb-6 h-32 w-32 rounded-full border-4 border-cyan-300 object-cover shadow-xl"
            />

            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-300">Portfolio Snapshot</p>
                <h3 className="mt-1 text-2xl font-bold">{profile.name}</h3>
              </div>
              <BrainCircuit className="text-cyan-300" size={34} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Focus", "Adversarial ML"],
                ["Degree", "MSc CS"],
                ["Teaching", "500+ students"],
                ["Certifications", "12+"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 text-sm leading-6 text-cyan-50">
              Machine Learning • Cybersecurity • Software Engineering
            </div>
          </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: GraduationCap, title: "Graduate Researcher", text: "MSc candidate at UNB researching adversarial machine learning and robust AI systems." },
            {
              icon: Users,
              title: "Educator & Team Lead",
              text: "Teaching assistant, lab team lead, and creator of a Persian AI Security course for learners facing language barriers.",
            },
            { icon: BriefcaseBusiness, title: "Industry-Oriented Builder", text: "Focused on practical ML, software engineering, APIs, mobile apps, cloud tools, and security systems." },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5">
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-50 p-3 text-cyan-700"><Icon size={26} /></div>
                <h3 className="text-xl font-bold text-slate-950">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>


      <section id="skills" className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Skills"
            title="Technical strengths"
            description="A practical mix of machine learning, software development, cloud tools, and cybersecurity."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <Icon className="text-cyan-300" size={30} />
                  <h3 className="mt-5 text-xl font-bold">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{item}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="Projects"
          title="Proof that I can build"
          description="A few practical projects that show I can design systems, write code, connect frontends to backends, evaluate ML models, and explain technical work clearly."
        />
        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
              <div className="h-48 bg-gradient-to-br from-slate-950 via-slate-800 to-cyan-800 p-5 text-white">
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-200">{project.subtitle}</p>
                  <h3 className="text-3xl font-black">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="leading-7 text-slate-600">{project.description}</p>
                <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">{project.impact}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">{tech}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && <LinkButton href={project.github} variant="secondary"><ExternalLink size={16} /> GitHub</LinkButton>}
                  {project.paper && (
                    <LinkButton href={project.paper} variant="secondary">
                      <BookOpen size={16} /> {project.paper?.includes("streamlit.app") ? "Live App" : "Paper"}
                    </LinkButton>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Publications"
            title="Research with practical direction"
            description="I have research experience, but I present it as evidence of deep problem-solving, technical writing, and the ability to understand complex systems."
          />
          <div className="grid gap-5">
            {publications.map((pub) => (
              <a key={pub.title} href={pub.link} target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-cyan-200">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-cyan-700">{pub.venue}</p>
                    <h3 className="mt-2 text-xl font-bold text-slate-950">{pub.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{pub.description}</p>
                  </div>
                  <ExternalLink className="shrink-0 text-slate-400" size={22} />
                </div>
              </a>
            ))}
          </div>

          <h3 className="mt-12 mb-5 text-2xl font-bold text-slate-950"></h3>

          <h3 className="mb-5 text-2xl font-bold text-slate-950">
            Ongoing Research & Engineering Work
          </h3>

          <div className="space-y-4">
            {[
              {
                title:
                  "Structured Prompt Consistency for Adversarial Image Detection with Frozen Vision-Language Models",
                status: "Under review at NeurIPS 2026",
              },
              // {
              //   title:
              //     "A Survey on Defenses against Adversarial Attacks: Strategies and Limitations",
              //   status: "Final review stage",
              // },
              {
                title:
                  "GraphRectify: Transferring Adversarial Example Detectors Across Neural Networks",
                status: "In development",
              },
              {
                title:
                  "Randomized Inference over Neuron Signatures for Robust Adversarial Detection",
                status: "In development",
              },
            ].map((paper) => (
              <div
                key={paper.title}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-900/5"
              >
                <h4 className="text-lg font-bold text-slate-950">
                  {paper.title}
                </h4>

                <p className="mt-2 text-sm font-medium text-cyan-700">
                  {paper.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader eyebrow="Experience" title="Experience that transfers to industry" />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div className="space-y-5">
            {experiences.map((exp) => (
              <div key={`${exp.role}-${exp.org}`} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">{exp.role}</h3>
                    <p className="mt-1 text-cyan-700">{exp.org}</p>
                  </div>
                  <p className="rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-600">{exp.date}</p>
                </div>
                <ul className="mt-5 space-y-2 text-slate-600">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7"><span className="mt-3 h-1.5 w-1.5 rounded-full bg-cyan-500" />{point}</li>
                  ))}
                </ul>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
                  >
                    View Link <ExternalLink size={15} />
                  </a>
                )}

                {exp.links && exp.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {exp.links.map((item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
                      >
                        {item.label} <ExternalLink size={15} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5">
            <div className="mb-5 flex items-center gap-3">
              <Award className="text-cyan-700" size={26} />
              <h3 className="text-xl font-bold text-slate-950">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">{cert}</span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-slate-50 p-5">
              <h4 className="font-bold text-slate-950">Education</h4>

              <div className="mt-5 space-y-5">
                <div className="flex gap-4 rounded-2xl bg-white/70 p-4">
                  <img
                    src="/logos/tsai-lab.png"
                    alt="Trustworthy and Secure AI Lab logo"
                    className="h-14 w-20 rounded-lg bg-white object-contain p-2"
                  />

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-slate-950">
                        Trustworthy and Secure AI Lab
                      </p>
                      <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700">
                        Oct 2025 - Aug 2026
                      </span>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Team Lead and LinkedIn page manager for lab communication,
                      educational content, and graduate student coordination.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl bg-white/70 p-4">
                  <img
                    src="/logos/unb-logo.jpg"
                    alt="University of New Brunswick logo"
                    className="h-14 w-20 rounded-lg bg-white object-contain p-2"
                  />

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-slate-950">
                        University of New Brunswick
                      </p>
                      <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700">
                        Sep 2024 - Aug 2026
                      </span>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      MSc Candidate in Computer Science. Focused on machine learning systems,
                      adversarial robustness, and software implementation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl bg-white/70 p-4">
                  <img
                    src="/logos/iut-logo.png"
                    alt="Isfahan University of Technology logo"
                    className="h-14 w-20 rounded-lg bg-white object-contain p-2"
                  />

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-slate-950">
                        Isfahan University of Technology
                      </p>
                      <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700">
                        Sep 2019 - Feb 2024
                      </span>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      BSc in Computer Engineering, with a minor in Intelligent Systems.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="educator" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Voluntary Educator"
            title="Making AI Security more accessible"
            description="A Persian technical course designed to help learners understand AI Security and Adversarial Machine Learning from the foundations."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 p-8 text-white md:p-10">
                <div className="mb-6 inline-flex rounded-2xl bg-white/10 p-4 text-cyan-200">
                  <BookOpen size={34} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                  AI Security Course
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  {educatorCourse.title}
                </h3>

                <p className="mt-4 text-lg text-cyan-100">
                  {educatorCourse.subtitle}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-300">
                      Language
                    </p>
                    <p className="mt-2 text-lg font-semibold">Persian</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-slate-300">
                      English Version
                    </p>
                    <p className="mt-2 text-lg font-semibold">Planned</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-lg leading-8 text-slate-600">
                  {educatorCourse.description}
                </p>

                <ul className="mt-6 space-y-3 text-slate-600">
                  {educatorCourse.details.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <LinkButton href={educatorCourse.youtube}>
                    <FaYoutube size={16} /> Watch Playlist
                  </LinkButton>

                  <LinkButton href={educatorCourse.github} variant="secondary">
                    <ExternalLink size={16} /> Course Materials
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
              <h2 className="text-3xl font-black md:text-4xl">Looking for someone who learns fast, builds seriously, and cares about the work?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                I am looking for machine learning engineering, software development, cybersecurity, and applied AI roles. I can relocate within Canada after my graduation in August 2026 and bring a mix of valuable research and hands-on experience.
              </p>
              <p className="mt-4 text-slate-300">
                Email: {profile.email}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard
                    .writeText(profile.email)
                    .then(() => {
                      setToastMessage(`Email copied: ${profile.email}`);
                      setTimeout(() => setToastMessage(""), 2500);
                    })
                    .catch(() => {
                      setToastMessage(`Please copy manually: ${profile.email}`);
                      setTimeout(() => setToastMessage(""), 3500);
                    });
                }}
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-cyan-100 hover:shadow-2xl hover:shadow-cyan-400/30 active:translate-y-0"
              >
                Copy Email <Mail size={16} className="transition-transform duration-200 group-hover:scale-110" />
              </button>
              <LinkButton href={profile.linkedin} variant="secondary">LinkedIn <ExternalLink size={16} /></LinkButton>
              <LinkButton href={profile.github} variant="secondary">GitHub <ExternalLink size={16} /></LinkButton>
            </div>
          </div>
        </div>
      </section>

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-slate-950 shadow-2xl shadow-slate-900/20 border border-slate-100">
          {toastMessage}
        </div>
      )}
    </main>
  );
}
