import { useState, type ComponentType } from "react";
import { motion } from "framer-motion";
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
  resumeUrl: "/resume.pdf",
  shortBio:
    "I turn complex AI and cybersecurity ideas into practical tools people can use. My work combines machine learning, software engineering, APIs, mobile apps, cloud tools, and a strong security mindset. I am completing my MSc at UNB and looking for industry roles where I can build reliable products, not just write papers.",
};

const navItems = ["About", "Skills", "Projects", "Publications", "Experience", "Contact"];

const skills: SkillGroup[] = [
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCLIP", "Feature engineering", "Model evaluation"],
  },
  {
    title: "Software Development",
    icon: Code2,
    items: ["Python", "Java", "JavaFX", "Kotlin", "C++", "SQL", "REST APIs", "JSON"],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    items: ["Phishing detection", "Network analysis", "Wireshark", "Security+"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    items: ["AWS", "Microsoft Azure", "Docker", "Git", "FastAPI", "Flask", "Jupyter"],
  },
];

const projects: Project[] = [
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
    title: "IEEE publication on machine learning and healthcare",
    venue: "Google Scholar record",
    description: "Research work completed during undergraduate research at Isfahan University of Technology.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yOVk_hcAAAAJ&citation_for_view=yOVk_hcAAAAJ:u-x6o8ySG0sC",
  },
  {
    title: "IEEE publication on machine learning and healthcare",
    venue: "Google Scholar record",
    description: "Research work completed during undergraduate research at Isfahan University of Technology.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=yOVk_hcAAAAJ&citation_for_view=yOVk_hcAAAAJ:u5HHmVD_uO8C",
  },
];

const experiences: Experience[] = [
  {
    role: "Team Lead",
    org: "Trustworthy and Secure AI (TSAI) Lab",
    date: "Oct 2025 - Present",
    points: [
      "Coordinate graduate student work and lab operations.",
      "Manage the TSAI LinkedIn page for educational content and lab communication.",
    ],
    link: "https://www.linkedin.com/company/trustworthy-and-secure-ai-tsai-lab/?viewAsMember=true",
  },
  {
    role: "Graduate Research Assistant",
    org: "University of New Brunswick",
    date: "Sep 2024 - Present",
    points: [
      "Conduct MSc research in adversarial machine learning, robustness, and attack detection.",
      "Co-authored a survey on adversarial attacks across model utility, privacy, and explainability.",
    ],
  },
  {
    role: "Graduate Teaching Assistant",
    org: "University of New Brunswick",
    date: "Jan 2025 - Apr 2026",
    points: [
      "Served in Software Engineering, Data Communication and Network Modeling, and Big Data Analytics courses.",
      "Helped students with Java, Python, programming concepts, and technical problem solving.",
    ],
  },
  {
    role: "Research Assistant",
    org: "Isfahan University of Technology",
    date: "Feb 2021 - Feb 2024",
    points: [
      "Conducted machine learning and healthcare research resulting in IEEE publications.",
      "Worked on model design, preprocessing, experimental evaluation, and technical writing.",
    ],
  },
];

const certifications: string[] = [
  "AWS Certified AI Practitioner",
  "AWS Certified Cloud Practitioner",
  "CompTIA Security+",
  "CompTIA Data+",
  "Microsoft AI-900",
  "Microsoft DP-900",
  "Microsoft AZ-900",
  "Microsoft SC-900",
  "CompTIA Project Management Essentials",
];

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

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            Available for industry roles after Aug 2026
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
            I build AI and security tools that move from research ideas to working products.
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
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/80 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
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
                  ["Certifications", "9+"],
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
            { icon: Users, title: "Educator & Team Lead", text: "Teaching assistant, lab team lead, and manager of educational content for the TSAI Lab." },
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
                  {project.paper && <LinkButton href={project.paper} variant="secondary"><BookOpen size={16} /> Paper</LinkButton>}
                </div>
                <p className="mt-5 text-xs leading-5 text-slate-400">{project.imageDescription}</p>
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
                {exp.link && <a href={exp.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">Visit TSAI Lab <ExternalLink size={15} /></a>}
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
              <p className="mt-3 text-sm leading-6 text-slate-600">
                MSc Candidate in Computer Science, University of NB, expected August 2026. Focused on machine learning systems, adversarial robustness, and software implementation.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                BSc in Computer Engineering, Isfahan University of Technology, with a minor in Intelligent Systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
              <h2 className="text-3xl font-black md:text-4xl">Looking for someone who is eager to grow and put his heart to work?</h2>
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
        alert(`Email copied: ${profile.email}`);
      })
      .catch(() => {
        alert(`Please copy my email manually: ${profile.email}`);
      });
  }}
  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-100"
>
  Copy Email <Mail size={16} />
</button>
              <LinkButton href={profile.linkedin} variant="secondary">LinkedIn <ExternalLink size={16} /></LinkButton>
              <LinkButton href={profile.github} variant="secondary">GitHub <ExternalLink size={16} /></LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
