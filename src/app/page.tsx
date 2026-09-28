"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = {
  github: "https://github.com/Amrutha-dev25",
  linkedin: "https://www.linkedin.com/in/amruthakattimani/",
  email: "mailto:kattimaniamrutha8@gmail.com",
  resume: "/AMRUTHA_KATTIMANI_RESUME.pdf",
};

const projects = [
  {
    number: "01",
    category: "COMPUTER VISION / AI",
    title: "DeepGuard AI",
    description:
      "A multi-agent deepfake media forensics platform that combines vision analysis, agentic routing and explainable reporting.",
    technologies: ["Google ADK", "Sightengine", "NVIDIA NIM", "Groq", "FastAPI", "React"],
    image: "/projects/deepguard.svg",
    github: "https://github.com/Amrutha-dev25/DeepGaurd-AI",
  },
  {
    number: "02",
    category: "AI / INFORMATION SYSTEM",
    title: "FirstIn",
    description:
      "An intelligent student information system that brings academic and opportunity information into one searchable platform.",
    technologies: ["React", "Node.js", "PostgreSQL", "RAG"],
    image: "/projects/firstin.svg",
    github: "https://github.com/Amrutha-dev25/FirstIn",
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "ReplastAI",
    description:
      "A machine-learning platform exploring prediction and decision support for plastic and recycling-related data.",
    technologies: ["Python", "Machine Learning", "React", "Data Processing"],
    image: "/projects/replast.svg",
    github: "https://github.com/Amrutha-dev25/ReplastAI",
  },
  {
    number: "04",
    category: "SOFTWARE / AI",
    title: "TechSift",
    description:
      "A software project focused on making technical information easier to discover, understand and use.",
    technologies: ["React", "TypeScript", "AI", "Software Engineering"],
    image: "/projects/techsift.svg",
    github: "https://github.com/Amrutha-dev25/TechSift",
  },
];

const skillTabs = [
  { id: "all", label: "ALL", skills: ["PyTorch","Transformers","OpenCV","FastAPI","React.js","Next.js","Node.js","Express","Python","C/C++","JavaScript","TypeScript","SQL","Pandas","NumPy","MongoDB","PostgreSQL","Docker","Kubernetes","AWS","Azure","Git","GitHub","RAG"] },
  { id: "ai", label: "AI / ML", skills: ["PyTorch","Transformers","OpenCV","Computer Vision","Machine Learning","RAG","LangChain","Hugging Face"] },
  { id: "web", label: "WEB", skills: ["React.js","Next.js","Node.js","Express","FastAPI","Tailwind CSS","REST APIs","TypeScript"] },
  { id: "cloud", label: "CLOUD", skills: ["AWS","AWS SageMaker","Azure","Azure Machine Learning","Docker","Kubernetes","Cloudflare"] },
  { id: "data", label: "DATA", skills: ["Pandas","NumPy","SQL","MongoDB","PostgreSQL","MySQL","Apache Spark","Hadoop","Kafka","Databricks"] },
  { id: "languages", label: "LANGUAGES", skills: ["Python","C/C++","JavaScript","TypeScript","SQL","HTML","CSS"] },
];

const introImage =
  "https://images.unsplash.com/photo-1575359600631-b3f3207da935?auto=format&fit=crop&w=2400&q=90";

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function IntroScreen({ visible, onDone }: { visible: boolean; onDone: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 2600);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] overflow-hidden bg-[#07111f] text-white"
        >
          <img
            src={introImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,20,.45),rgba(3,10,20,.22)_45%,rgba(3,10,20,.72))]" />
          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute left-0 right-0 top-0 border-b border-white/20">
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-10">
              <span className="text-xs font-semibold tracking-[0.28em]">AK</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">Portfolio · 2026</span>
            </div>
          </div>

          <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
            <div className="-mt-10">
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}
                className="mb-6 font-mono text-[9px] uppercase tracking-[0.42em] text-white/80">
                Computer Science · AI / ML · Research
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 34, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-[17vw] font-semibold leading-[0.78] tracking-[-0.075em] drop-shadow-[0_5px_24px_rgba(0,0,0,.28)] sm:text-[12vw] lg:text-[9.3vw]">
                AMRUTHA<br />KATTIMANI
              </motion.h1>
              <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: "180px", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }} className="mx-auto mt-8 h-px bg-white/80" />
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.6 }}
                className="mt-5 text-sm tracking-[0.22em] text-white/85">
                Building intelligent systems with purpose.
              </motion.p>
            </div>
          </div>

          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/75">
            <span className="font-mono text-[8px] tracking-[0.3em]">SCROLL TO EXPLORE</span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SocialIcon({ type }: { type: "github" | "linkedin" | "mail" }) {
  if (type === "github") return (
    <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="currentColor" aria-hidden="true">
      <path d="M12 .6a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .6Z" />
    </svg>
  );
  if (type === "linkedin") return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M5.2 3.5A2.2 2.2 0 1 1 .8 3.5a2.2 2.2 0 0 1 4.4 0ZM1 8h4.3v13H1V8Zm6.7 0H12v1.78h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.3 2.94 5.3 6.76V21h-4.3v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21H7.7V8Z" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-black/[0.08] bg-white/90 px-4 shadow-[0_12px_40px_rgba(0,0,0,.06)] backdrop-blur-xl sm:px-6">
        <a href="#home" className="text-sm font-bold tracking-[-0.04em]">AMRUTHA</a>
        <div className="hidden items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 md:flex">
          {["about","skills","projects","experience","blog","contact"].map((item) => (
            <a key={item} href={`#${item}`} className="transition hover:text-[#e56f3d]">{item}</a>
          ))}
        </div>
        <a href={LINKS.resume} className="rounded-full bg-[#101828] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#e56f3d]">Resume</a>
      </nav>
    </header>
  );
}

function SectionLabel({ number, title, dark = false }: { number: string; title: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[9px] font-semibold uppercase tracking-[0.26em] ${dark ? "text-white/45" : "text-neutral-400"}`}>
      <span className={dark ? "text-[#ff9a70]" : "text-[#e56f3d]"}>{number}</span>
      <span className={dark ? "bg-white/15" : "bg-black/10"} style={{ width: 34, height: 1 }} />
      <span>{title}</span>
    </div>
  );
}

const projectArtwork: Record<string, string> = {
  "DeepGuard AI": `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#111827"/><stop offset=".55" stop-color="#1d3557"/><stop offset="1" stop-color="#4b2434"/></linearGradient><radialGradient id="b"><stop stop-color="#ff9a70" stop-opacity=".8"/><stop offset="1" stop-color="#ff9a70" stop-opacity="0"/></radialGradient></defs><rect width="1600" height="1000" fill="url(#a)"/><circle cx="380" cy="250" r="420" fill="url(#b)"/><g fill="none" stroke="#fff" stroke-opacity=".16"><rect x="170" y="150" width="1260" height="700" rx="38"/><path d="M170 670h1260M420 150v700M760 150v700M1100 150v700"/></g><g fill="none" stroke="#ffb08f" stroke-width="8" opacity=".9"><path d="M260 590 C430 470 510 690 660 560 S930 410 1050 540 S1260 650 1370 420"/><path d="M260 650 C420 540 560 760 720 620 S980 470 1110 600 S1270 700 1370 520" opacity=".45"/></g><circle cx="1050" cy="540" r="15" fill="#fff"/><text x="170" y="125" fill="#fff" opacity=".75" font-family="Arial" font-size="26" letter-spacing="8">DEEPFAKE FORENSICS</text><text x="1170" y="805" fill="#fff" opacity=".5" font-family="monospace" font-size="22" letter-spacing="5">TEMPORAL SIGNAL</text></svg>`)}`,
  "FirstIn": `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0b1324"/><stop offset=".55" stop-color="#173b5c"/><stop offset="1" stop-color="#2d5b6d"/></linearGradient></defs><rect width="1600" height="1000" fill="url(#a)"/><g fill="none" stroke="#fff" stroke-opacity=".12"><path d="M0 170h1600M0 340h1600M0 510h1600M0 680h1600M0 850h1600"/><path d="M180 0v1000M520 0v1000M860 0v1000M1200 0v1000"/></g><rect x="180" y="190" width="1240" height="620" rx="34" fill="#fff" fill-opacity=".07" stroke="#fff" stroke-opacity=".18"/><rect x="250" y="260" width="420" height="460" rx="22" fill="#fff" fill-opacity=".08"/><rect x="720" y="260" width="630" height="110" rx="18" fill="#fff" fill-opacity=".08"/><rect x="720" y="405" width="300" height="315" rx="18" fill="#ff9a70" fill-opacity=".22"/><rect x="1050" y="405" width="300" height="315" rx="18" fill="#fff" fill-opacity=".08"/><circle cx="460" cy="410" r="82" fill="#ff9a70" fill-opacity=".8"/><path d="M335 650c40-120 210-120 250 0" fill="none" stroke="#fff" stroke-width="20" stroke-opacity=".65"/><text x="180" y="140" fill="#fff" opacity=".75" font-family="Arial" font-size="26" letter-spacing="8">INTELLIGENT INFORMATION SYSTEM</text></svg>`)}`,
  "ReplastAI": `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><defs><linearGradient id="a" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#10241e"/><stop offset=".55" stop-color="#195447"/><stop offset="1" stop-color="#5d7851"/></linearGradient></defs><rect width="1600" height="1000" fill="url(#a)"/><g fill="none" stroke="#fff" stroke-opacity=".12"><circle cx="800" cy="500" r="380"/><circle cx="800" cy="500" r="270"/><circle cx="800" cy="500" r="160"/></g><path d="M800 170l110 185H690z" fill="#9de3b1" fill-opacity=".85"/><path d="M800 830L690 645h220z" fill="#9de3b1" fill-opacity=".55"/><path d="M470 650l215-8-108-180z" fill="#fff" fill-opacity=".18"/><path d="M1130 350l-215 8 108 180z" fill="#fff" fill-opacity=".18"/><circle cx="800" cy="500" r="78" fill="#ff9a70" fill-opacity=".82"/><path d="M760 500h80M800 460v80" stroke="#fff" stroke-width="12" stroke-linecap="round"/><text x="180" y="140" fill="#fff" opacity=".75" font-family="Arial" font-size="26" letter-spacing="8">PLASTIC CIRCULAR ECONOMY</text><text x="1110" y="850" fill="#fff" opacity=".5" font-family="monospace" font-size="22" letter-spacing="5">ML • DATA • DECISIONS</text></svg>`)}`,
  "TechSift": `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#111827"/><stop offset=".5" stop-color="#2a3157"/><stop offset="1" stop-color="#523f65"/></linearGradient></defs><rect width="1600" height="1000" fill="url(#a)"/><g stroke="#fff" stroke-opacity=".11" fill="none"><path d="M0 800L800 100 1600 800"/><path d="M0 650L650 100 1600 650"/><path d="M0 500L500 100 1600 500"/></g><rect x="220" y="180" width="1160" height="640" rx="36" fill="#fff" fill-opacity=".06" stroke="#fff" stroke-opacity=".16"/><g fill="#fff" fill-opacity=".75"><rect x="300" y="280" width="450" height="34" rx="17"/><rect x="300" y="350" width="700" height="20" rx="10" opacity=".45"/><rect x="300" y="395" width="590" height="20" rx="10" opacity=".3"/></g><circle cx="1180" cy="440" r="145" fill="#ff9a70" fill-opacity=".75"/><path d="M1115 440h130M1180 375v130" stroke="#fff" stroke-width="14" stroke-linecap="round"/><text x="220" y="130" fill="#fff" opacity=".75" font-family="Arial" font-size="26" letter-spacing="8">SOFTWARE • AI • DISCOVERY</text></svg>`)}`
};

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6 }}
      className="group relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/10 bg-[#172033] shadow-[0_24px_70px_rgba(15,23,42,.22)]"
    >
      <div className="absolute inset-x-0 top-0 h-[190px] overflow-hidden rounded-t-[28px] bg-[#172033]">
        <img
          src={projectArtwork[project.title]}
          alt={`${project.title} project visual`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#101828]/45" />
      </div>
      <div className="relative flex min-h-[500px] flex-col justify-between p-6 pt-[220px] text-white sm:p-8 sm:pt-[220px]">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 font-mono text-[8px] tracking-[0.18em] backdrop-blur-md">{project.number}</span>
          <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/75 backdrop-blur-md">{project.category}</span>
        </div>

        <div>
          <h3 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">{project.title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/72">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-[8px] text-white/75 backdrop-blur-md">{technology}</span>
            ))}
          </div>
          <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-5">
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] hover:text-[#ffb48e]">
              View project <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [activeSkill, setActiveSkill] = useState("all");
  const [blogOpen, setBlogOpen] = useState(false);

  const currentSkills = useMemo(
    () => skillTabs.find((tab) => tab.id === activeSkill)?.skills ?? [],
    [activeSkill]
  );

  return (
    <>
      <IntroScreen visible={!introDone} onDone={() => setIntroDone(true)} />

      <main id="home" className="min-h-screen bg-[#f7f8fa] text-[#101828]">
        <Navbar />

        {/* HERO */}
        <section className="relative flex min-h-[calc(100vh-24px)] items-center overflow-hidden bg-[#f8f8f6] pt-28 sm:pt-32">
          <div className="absolute -left-44 top-28 h-[34rem] w-[34rem] rounded-full bg-[#dbeafe]/50 blur-3xl" />
          <div className="absolute -right-44 bottom-0 h-[36rem] w-[36rem] rounded-full bg-[#fde4d7]/60 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 bg-black/[0.045]" />

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 lg:pb-24">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }} className="mx-auto max-w-6xl text-center">

              <div className="mb-7 flex items-center justify-center gap-3 text-[9px] font-semibold uppercase tracking-[0.36em] text-neutral-500">
                Computer Science · AI / ML · Research
              </div>

              <div className="relative">
                <h1 className="font-sans text-[13vw] font-black leading-[0.78] tracking-[-0.09em] text-[#0b1424] sm:text-[10vw] lg:text-[8.4rem]">
                  AMRUTHA
                  <br />
                  <span className="relative inline-block">
                    KATTIMANI
                    
                  </span>
                </h1>
                <div className="pointer-events-none absolute -bottom-2 left-1/2 hidden h-px w-[72%] -translate-x-1/2 bg-black/10 md:block" />
              </div>

              <p className="mx-auto mt-10 max-w-3xl text-xl font-medium leading-8 tracking-[-0.025em] text-neutral-600 sm:mt-12 sm:text-2xl sm:leading-9">
                I build intelligent systems, explore meaningful research, and turn complex ideas into software people can use.
              </p>

              <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
                {[
                  ["github", LINKS.github],
                  ["linkedin", LINKS.linkedin],
                  ["mail", LINKS.email],
                ].map(([type, href]) => (
                  <a key={type} href={href} target={type === "mail" ? undefined : "_blank"} rel={type === "mail" ? undefined : "noreferrer"}
                    aria-label={type === "mail" ? "Email" : type === "github" ? "GitHub" : "LinkedIn"}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#111827] shadow-[0_6px_20px_rgba(0,0,0,.05)] transition duration-300 hover:-translate-y-1 hover:border-[#e56f3d] hover:text-[#e56f3d] hover:shadow-lg">
                    <SocialIcon type={type as "github" | "linkedin" | "mail"} />
                  </a>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#101828] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#e56f3d]">
                  View projects <ArrowUpRight />
                </a>
                <a href="#about" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 transition hover:text-[#101828]">
                  More about me ↓
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-y border-black/[0.07] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <SectionLabel number="01" title="About" />
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
              <div className="relative mx-auto w-full max-w-[260px]">
                <div className="absolute -inset-3 rounded-[30px] border border-black/[0.06]" />
                <div className="relative overflow-hidden rounded-[26px] bg-[#eef0f2]">
                  <img src="/image.png" alt="Amrutha Kattimani" className="aspect-[4/5] h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement?.classList.add("flex", "items-center", "justify-center"); if (e.currentTarget.parentElement) e.currentTarget.parentElement.innerHTML = "<span style=\"font-size:72px;font-weight:700;letter-spacing:-.08em;color:#101828\">AK</span>"; }} />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-semibold tracking-[-0.045em] text-[#101828] sm:text-5xl">About Me</h2>
                <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-7 text-neutral-500">
                  <p>I am a Computer Science student at PES University with interests in artificial intelligence, machine learning, computer vision and research-oriented software systems.</p>
                  <p>I enjoy breaking complex problems into experiments, understanding the results and turning useful ideas into practical software.</p>
                </div>
                <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-black/[0.07] bg-black/[0.07] sm:grid-cols-4">
                  {[['AI / ML','Focus'],['Computer Vision','Research'],['Software','Build'],['Research','Explore']].map(([value,label]) => (
                    <div key={value} className="bg-white px-4 py-5">
                      <p className="text-sm font-semibold text-[#101828]">{value}</p>
                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-neutral-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-[#f7f8fa]">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <SectionLabel number="02" title="Skills" />
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Skills</h2>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/[0.07] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,.06)] sm:p-7 lg:p-9">
              <div className="flex flex-wrap gap-2.5 border-b border-black/[0.07] pb-7">
                {skillTabs.map((tab) => {
                  const active = tab.id === activeSkill;
                  return (
                    <button type="button" key={tab.id} onClick={() => setActiveSkill(tab.id)}
                      className={`rounded-full px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition ${active ? "bg-[#101828] text-white shadow-lg" : "bg-[#f1f3f5] text-neutral-500 hover:bg-[#e7eaee] hover:text-neutral-800"}`}>
                      {tab.label}<span className={`ml-2 ${active ? "text-white/50" : "text-neutral-400"}`}>{tab.skills.length}</span>
                    </button>
                  );
                })}
              </div>
              <motion.div key={activeSkill} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }} className="pt-8">
                <div className="flex min-h-[170px] flex-wrap content-start gap-3">
                  {currentSkills.map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-xl border border-black/[0.07] bg-[#f8f9fb] px-4 py-3 text-sm font-medium text-neutral-700 shadow-[0_1px_4px_rgba(0,0,0,.025)] transition hover:-translate-y-0.5 hover:border-[#e56f3d]/30 hover:bg-white hover:shadow-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-[#101828] text-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel number="03" title="Projects" dark />
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Projects</h2>
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <SectionLabel number="04" title="Experience" />
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Experience</h2>
            <div className="mt-10 divide-y divide-black/[0.08] border-y border-black/[0.08]">
              <div className="grid gap-5 py-9 md:grid-cols-[170px_1fr_auto] md:items-start">
                <div><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#e56f3d]">Internship</p><p className="mt-2 text-sm text-neutral-400">2026</p></div>
                <div><h3 className="text-2xl font-semibold tracking-[-0.03em]">ISFCR</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-500">Technical work, problem solving and practical exposure to software and computing workflows.</p></div>
                <span className="font-mono text-[8px] tracking-[0.18em] text-neutral-400">2026</span>
              </div>
              <div className="grid gap-5 py-9 md:grid-cols-[170px_1fr_auto] md:items-start">
                <div><p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#e56f3d]">Education</p><p className="mt-2 text-sm text-neutral-400">Present</p></div>
                <div><h3 className="text-2xl font-semibold tracking-[-0.03em]">PES University</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-500">B.Tech in Computer Science and Engineering, with work across AI/ML, software engineering, data and research.</p></div>
                <span className="font-mono text-[8px] tracking-[0.18em] text-neutral-400">PRESENT</span>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG — ONLY ONE POST */}
        <section id="blog" className="bg-[#f7f8fa]">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <SectionLabel number="05" title="Blog" />
            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Blog</h2>
            </div>

            <article className="group relative mt-10 overflow-hidden rounded-[30px] border border-black/[0.07] bg-white shadow-[0_20px_60px_rgba(15,23,42,.07)]">
              <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                <div className="relative min-h-[330px] overflow-hidden bg-[#111827]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(229,111,61,.38),transparent_28%),radial-gradient(circle_at_75%_70%,rgba(82,130,232,.35),transparent_34%),linear-gradient(135deg,#111827,#1e293b)]" />
                  <div className="absolute inset-8 rounded-[22px] border border-white/15">
                    <div className="absolute left-8 top-16 h-px w-28 bg-white/25" />
                    <div className="absolute bottom-10 left-8 right-8 grid grid-cols-7 items-end gap-2">
                      {[42, 72, 54, 91, 65, 82, 48].map((h, i) => (
                        <div key={i} className="rounded-t-sm bg-white/25" style={{ height: `${h}px` }} />
                      ))}
                    </div>
                    <div className="absolute bottom-8 right-8 font-mono text-[8px] uppercase tracking-[0.22em] text-white/45">TEMPORAL ANALYSIS</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#e56f3d]">DeepGuard AI · Project Note</p>
                  <h3 className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl">
                    Building a multi-agent deepfake media forensics system.
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-neutral-500">
                    A project note on DeepGuard AI: a multi-agent system using Router, Analysis and Report agents, vision analysis, fallback models and explainable reporting.
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-black/[0.08] pt-5">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">DeepGuard AI · 2026</span>
                    <button type="button" onClick={() => setBlogOpen(true)} className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#101828] transition hover:text-[#e56f3d]">
                      Read note <ArrowUpRight />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <AnimatePresence>
          {blogOpen && (
            <motion.div
              className="fixed inset-0 z-[180] overflow-y-auto bg-[#f7f8fa]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <article className="min-h-screen bg-[#f7f8fa] text-[#101828]">
                <div className="mx-auto max-w-5xl px-6 pb-20 pt-28 sm:px-10">
                  <div className="flex items-center justify-between border-b border-black/[0.08] pb-6">
                    <button type="button" onClick={() => setBlogOpen(false)} className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 transition hover:text-[#101828]">
                      ← Back to blog
                    </button>
                    <a href="https://github.com/Amrutha-dev25/DeepGaurd-AI" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 transition hover:text-[#e56f3d]">
                      GitHub <ArrowUpRight />
                    </a>
                  </div>

                  <header className="mx-auto max-w-4xl py-14 sm:py-20">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#e56f3d]">DeepGuard AI · Deepfake Media Forensics</p>
                    <h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-7xl">
                      Building a multi-agent deepfake media forensics system.
                    </h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-500">
                      DeepGuard AI is a multi-agent deepfake media forensics project designed around media analysis, agent coordination and explainable reporting.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {["Google ADK", "Sightengine", "NVIDIA NIM", "Groq", "FastAPI", "React"].map((item) => (
                        <span key={item} className="rounded-full border border-black/[0.08] bg-white px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-neutral-500">{item}</span>
                      ))}
                    </div>
                  </header>

                  <div className="overflow-hidden rounded-[28px] bg-black shadow-[0_24px_80px_rgba(15,23,42,.14)]">
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/O3blCre4mMA?rel=0"
                        title="DeepGuard AI project demonstration"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div className="mx-auto mt-14 grid max-w-4xl gap-12 lg:grid-cols-[170px_1fr]">
                    <aside className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-400">
                      Project note
                      <div className="mt-3 text-[#101828]">DeepGuard AI</div>
                    </aside>
                    <div className="space-y-12 text-[15px] leading-8 text-neutral-600">
                      <section>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e56f3d]">01 · What it is</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#101828]">Multi-agent deepfake media forensics</h2>
                        <p className="mt-4">DeepGuard AI is described in the project repository as a multi-agent deepfake media forensics system. The project combines agent-based analysis with vision models and explainable reports.</p>
                      </section>

                      <section>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e56f3d]">02 · The agents</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#101828]">Three focused ADK agents</h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                          {[
                            ["Router", "Handles routing within the multi-agent setup."],
                            ["Analysis", "Focuses on media analysis."],
                            ["Report", "Produces the project’s report output."],
                          ].map(([name, description]) => (
                            <div key={name} className="rounded-2xl border border-black/[0.07] bg-white p-5">
                              <p className="font-semibold text-[#101828]">{name}</p>
                              <p className="mt-2 text-sm leading-6 text-neutral-500">{description}</p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e56f3d]">03 · Analysis stack</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#101828]">Primary analysis with a fallback path</h2>
                        <p className="mt-4">The repository identifies Sightengine as the primary analysis API and NVIDIA NIM as the fallback, using Nemotron Omni followed by Nemotron Nano. Groq is used for routing and report generation.</p>
                      </section>

                      <section>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e56f3d]">04 · Application layer</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#101828]">FastAPI backend + React frontend</h2>
                        <p className="mt-4">The project uses a FastAPI backend with an asynchronous upload pipeline and a React frontend with real-time results. The repository also documents Docker support and separates the backend, frontend, documentation and deployment areas.</p>
                      </section>

                      <section className="rounded-[24px] bg-[#101828] p-7 text-white sm:p-9">
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">05 · In one line</p>
                        <p className="mt-4 text-2xl font-medium leading-9 tracking-[-0.03em]">DeepGuard AI brings together multi-agent orchestration, media analysis and explainable reporting in one deepfake forensics application.</p>
                      </section>
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CONTACT */}
        <section id="contact" className="bg-[#101828] text-white">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
            <SectionLabel number="06" title="Contact" dark />
            <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/40">Have an idea, opportunity or research conversation?</p>
                <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] sm:text-7xl lg:text-[6.7rem]">
                  LET&apos;S<br /><span className="text-white/35">CONNECT.</span>
                </h2>
              </div>
              <a href={LINKS.email} className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#101828] transition hover:-translate-y-1 hover:bg-[#ff9a70]">
                Send me an email <ArrowUpRight />
              </a>
            </div>

            <div className="mt-16 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">01</span>
                <div className="mt-5 flex items-center justify-between"><span className="text-sm font-medium">GitHub</span><ArrowUpRight /></div>
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">02</span>
                <div className="mt-5 flex items-center justify-between"><span className="text-sm font-medium">LinkedIn</span><ArrowUpRight /></div>
              </a>
              <a href={LINKS.resume} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">03</span>
                <div className="mt-5 flex items-center justify-between"><span className="text-sm font-medium">Resume</span><ArrowUpRight /></div>
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#101828]">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-7 text-white/35 sm:flex-row sm:px-10">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em]">Amrutha Kattimani · 2026</p>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em]">AI · Research · Software</p>
          </div>
        </footer>
      </main>
    </>
  );
}
