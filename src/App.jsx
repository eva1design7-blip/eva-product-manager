import { useEffect, useState } from "react";
import { content } from "./content";

function scrollToSection(id, closeMenu) {
  closeMenu?.();
  requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
}

function Header({ openMenu }) {
  return (
    <header className="site-header">
      <button className="wordmark" aria-label="Наверх" onClick={() => scrollToSection("top")}>EN<span>↗</span></button>
      <nav className="desktop-nav" aria-label="Основная навигация">
        {content.navigation.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)}>{item.label}</button>)}
      </nav>
      <button className="menu-button" aria-label="Открыть меню" onClick={openMenu}>menu</button>
    </header>
  );
}

function HeroArt() {
  return (
    <div className="hero-art" aria-label="Продуктовая схема: данные, гипотеза, результат">
      <div className="canvas-label">product thinking</div>
      <div className="metric-card metric-card-main"><span>изменение</span><strong>→ результат</strong></div>
      <div className="metric-card metric-card-small"><span>orders</span><strong>+50%</strong></div>
      <div className="cyan-loop" /><div className="orange-stroke" /><div className="cursor-tag">Ева, PM</div>
      <p className="art-note">Не просто запускаю — проверяю, что изменилось.</p>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1>{content.hero.firstName}<br />{content.hero.lastName}</h1>
        <div className="hero-labels">{content.hero.labels.map((label) => <span key={label}>{label}</span>)}</div>
      </div>
      <HeroArt />
    </section>
  );
}

function About() {
  return (
    <section className="statement" id="about">
      <p className="section-index">01 / Обо мне</p>
      <h2>Превращаю данные,<br />поведение пользователей<br />и бизнес-задачи<br /><em>в понятные решения.</em></h2>
      <div className="statement-grid">{content.about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
    </section>
  );
}

function ProjectCard({ project, index, openProject }) {
  return (
    <button className={`project-card ${project.className} ${project.wide ? "project-wide" : ""}`} aria-label={`Открыть кейс: ${project.title}`} onClick={() => openProject(index)}>
      <div className="project-topline"><span>{String(index + 1).padStart(2, "0")}</span><span>Открыть ↗</span></div>
      <div className="project-visual"><div className="project-orbit" /><strong>{project.metric}</strong><small>{project.metricLabel}</small></div>
      <div className="project-copy"><p>{project.company}</p><h3>{project.title}</h3><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
    </button>
  );
}

function Projects({ openProject }) {
  return (
    <section className="projects" id="projects">
      <div className="section-heading"><p className="section-index">02 / Избранные кейсы</p><h2>Работа, которую можно измерить</h2><p>Нажмите на кейс, чтобы увидеть задачу, ход решения и результат.</p></div>
      <div className="project-grid">{content.projects.map((project, index) => <ProjectCard key={project.title} {...{ project, index, openProject }} />)}</div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <p className="section-index">03 / Опыт</p>
      <div className="experience-intro"><h2>От контента — к продукту</h2><p>Опыт переупакован вокруг решений, ответственности и влияния на метрики.</p></div>
      <div className="timeline">{content.experience.map((item) => <article key={`${item.period}-${item.company}`}><time>{item.period}</time><div><h3>{item.company}</h3><p>{item.role}</p></div><p>{item.description}</p></article>)}</div>
    </section>
  );
}

function Toolkit() {
  return (
    <section className="toolkit"><div className="section-heading toolkit-heading"><p className="section-index">04 / Toolkit</p><h2>Инструменты и подходы</h2></div><div className="skills-cloud">{content.skills.map((skill) => <span className={skill.accent ? "skill-accent" : ""} key={skill.label}>{skill.label}</span>)}</div></section>
  );
}

function Footer() {
  return <footer><p>{content.footer.question}</p><button type="button">Давайте знакомиться <span>↗</span></button><div className="footer-meta"><span>Ева Носова · Product Manager</span><span>Москва · 2026</span></div></footer>;
}

function MenuOverlay({ close }) {
  return (
    <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Меню">
      <button className="overlay-close" aria-label="Закрыть меню" onClick={close}>close ×</button>
      <div className="menu-links">{content.navigation.map((item, index) => <button key={item.id} onClick={() => scrollToSection(item.id, close)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</button>)}</div>
      <p>Product Manager · Moscow</p>
    </div>
  );
}

function ProjectDetails({ project, close, next }) {
  const details = [["Задача", project.task], ["Что сделала", project.actions], ["Результат", project.result]];
  return (
    <div className="case-overlay" role="dialog" aria-modal="true" aria-label={project.title}>
      <button className="overlay-close" aria-label="Закрыть кейс" onClick={close}>close ×</button>
      <div className="case-sheet">
        <p className="case-company">{project.company}</p><h2>{project.title}</h2><p className="case-lead">{project.lead}</p>
        <div className={`case-metric ${project.className}`}><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
        <div className="case-details">{details.map(([heading, value]) => <div key={heading}><h3>{heading}</h3>{Array.isArray(value) ? <ol>{value.map((item) => <li key={item}>{item}</li>)}</ol> : <p>{value}</p>}</div>)}</div>
        <button className="next-case" onClick={next}>Следующий кейс →</button>
      </div>
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  useEffect(() => {
    const overlayOpen = menuOpen || activeProject !== null;
    document.body.style.overflow = overlayOpen ? "hidden" : "";
    const onKey = (event) => { if (event.key === "Escape") { setMenuOpen(false); setActiveProject(null); } };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [menuOpen, activeProject]);
  return (
    <main>
      <Header openMenu={() => setMenuOpen(true)} /><Hero /><About /><Projects openProject={setActiveProject} /><Experience /><Toolkit /><Footer />
      {menuOpen && <MenuOverlay close={() => setMenuOpen(false)} />}
      {activeProject !== null && <ProjectDetails project={content.projects[activeProject]} close={() => setActiveProject(null)} next={() => setActiveProject((current) => (current + 1) % content.projects.length)} />}
    </main>
  );
}

function MobileQaFrame() { return <div className="qa-mobile-stage"><iframe title="Mobile QA" src="/?embedded=1" /></div>; }

export function App() {
  const params = new URLSearchParams(window.location.search);
  return params.get("qa") === "mobile" ? <MobileQaFrame /> : <Portfolio />;
}
