import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Menu, X, Download, Mail, Phone, MapPin, ChevronDown, Award, HardHat, Cog, Flame, Building2, Workflow, Users, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { profile, about, expertise, jobs, projects, skills, certs, safety } from './data/data'

const icons: Record<string, typeof Cog> = { Cog, Flame, Building2, Workflow, Users, ShieldCheck }
const asset = (p: string) => import.meta.env.BASE_URL + p
const nav = [['home', 'Home'], ['about', 'About'], ['expertise', 'Expertise'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills'], ['certifications', 'Certifications'], ['education', 'Education'], ['contact', 'Contact']]

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current!
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={'reveal' + (on ? ' in' : '')} style={{ transitionDelay: delay + 'ms' }}>{children}</div>
}

function Section({ id, title, intro, children, dark }: { id: string; title: string; intro?: string; children: ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={'section' + (dark ? ' dark' : '')} aria-labelledby={id + '-h'}>
      <div className="wrap">
        <Reveal><h2 id={id + '-h'}>{title}</h2>{intro && <p className="lead">{intro}</p>}<div className="rule" /></Reveal>
        {children}
      </div>
    </section>
  )
}

function Header() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40)
      let cur = 'home'
      for (const [id] of nav) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) cur = id }
      setActive(cur)
    }
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={'nav' + (solid || open ? ' solid' : '')}>
      <div className="wrap nav-in">
        <a href="#home" className="brand" aria-label="Mzikayise Nene home"><span>MN</span>Mzikayise Nene</a>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'open' : ''} aria-label="Main">
          {nav.map(([id, l]) => <a key={id} href={'#' + id} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const style = profile.heroImage ? { backgroundImage: `linear-gradient(rgba(20,35,51,.82),rgba(20,35,51,.9)),url(${asset(profile.heroImage)})` } : undefined
  return (
    <section id="home" className="hero" style={style}>
      <div className="steel" aria-hidden="true">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMaxYMid slice">
          <g className="draw" fill="none" stroke="#B68A50" strokeWidth="2">
            <path d="M560 600V120M700 600V60M840 600V160M520 180H860M520 320H860M520 460H860M560 120L700 320L840 160M700 60L560 320M700 60L840 320M560 460L700 320L840 460" />
          </g>
        </svg>
      </div>
      <div className="wrap hero-in">
        <p className="kicker rise" style={{ animationDelay: '.1s' }}>Gauteng, South Africa</p>
        <h1 className="rise" style={{ animationDelay: '.2s' }}>Mzikayise Nene</h1>
        <p className="role rise" style={{ animationDelay: '.35s' }}>{profile.title}</p>
        <p className="sub rise" style={{ animationDelay: '.45s' }}>{profile.tagline}</p>
        <div className="intro rise" style={{ animationDelay: '.55s' }}>{profile.intro.map((t, i) => <p key={i}>{t}</p>)}</div>
        <div className="btns rise" style={{ animationDelay: '.7s' }}>
          <a className="btn primary" href="#experience">Explore My Experience</a>
          <a className="btn ghost" href={asset(profile.cv)} download="Mzikayise_Nene_Professional_CV.pdf"><Download size={18} /> Download My CV</a>
          <a className="btn ghost" href="#contact">Contact Me</a>
        </div>
        <ul className="facts rise" style={{ animationDelay: '.85s' }}>
          <li><MapPin size={16} />{profile.location}</li>
          <li><Mail size={16} /><a href={'mailto:' + profile.email}>{profile.email}</a></li>
          <li><Phone size={16} /><a href={'tel:' + profile.phoneLink}>{profile.phone}</a></li>
        </ul>
      </div>
    </section>
  )
}

function Timeline() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <ol className="timeline">
      {jobs.map((j, i) => {
        const isOpen = open === i
        return (
          <li key={i} className={isOpen ? 'open' : ''}>
            <Reveal>
              <button className="job" aria-expanded={isOpen} aria-controls={'job-' + i} onClick={() => setOpen(isOpen ? null : i)}>
                <span className="period">{j.period}</span>
                <span className="jt"><strong>{j.title}</strong><em>{j.company}{j.project ? ' — ' + j.project : ''}</em></span>
                <ChevronDown className="chev" />
              </button>
              <div className="panel" id={'job-' + i} role="region" hidden={!isOpen}>
                <ul>{j.points.map((p, k) => <li key={k}>{p}</li>)}</ul>
              </div>
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}

export default function App() {
  return (
    <>
      <a href="#about" className="skip">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Section id="about" title="About">
          <div className="about">{about.map((t, i) => <Reveal key={i} delay={i * 60}><p>{t}</p></Reveal>)}</div>
        </Section>
        <Section id="expertise" title="Areas of Expertise" intro="Six disciplines, built over more than a decade on industrial sites." dark>
          <div className="grid3">
            {expertise.map((e, i) => { const I = icons[e.icon]; return (
              <Reveal key={e.title} delay={i * 70}>
                <article className="card"><I size={28} /><h3>{e.title}</h3><ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul></article>
              </Reveal>) })}
          </div>
        </Section>
        <Section id="experience" title="Professional Experience" intro="Eleven positions, most recent first. Select a role to see responsibilities.">
          <Timeline />
          <p className="note">Dates are shown exactly as stated on the CV. Some periods overlap and have been left as supplied.</p>
        </Section>
        <Section id="projects" title="Industrial Projects & Site Experience" intro="Employers, contractors and sites where Mzikayise has worked, with his role at each." dark>
          <div className="grid3 proj">
            {projects.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 70}>
                <article className={'pcard k-' + p.kind}>
                  <span className="tag">{p.kind}</span>
                  <h3>{p.org}</h3>
                  {p.place && <p className="place">{p.place}</p>}
                  <p className="prole">Role: {p.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
        <Section id="skills" title="Professional Skills">
          <div className="grid2">
            {skills.map((g, i) => (
              <Reveal key={g.group} delay={i * 70}>
                <div className="skillgroup"><h3>{g.group}</h3><ul className="chips">{g.items.map(s => <li key={s}>{s}</li>)}</ul></div>
              </Reveal>
            ))}
          </div>
        </Section>
        <Section id="certifications" title="Training & Certifications" intro="One trade certificate and five short-course training certificates. The short courses are not professional licences or degrees." dark>
          <div className="grid3">
            {certs.map((c, i) => (
              <Reveal key={c.number} delay={(i % 3) * 70}>
                <article className="cert">
                  <Award size={24} />
                  <h3>{c.title}</h3>
                  <p className="prov">{c.provider}</p>
                  <dl>
                    <div><dt>Certificate no.</dt><dd>{c.number}</dd></div>
                    <div><dt>Issued</dt><dd>{c.issued}</dd></div>
                    <div><dt>Renewal due</dt><dd>{c.renewal}</dd></div>
                    {c.saqa && <div><dt>{c.saqa.includes(' ') ? 'Details' : 'SAQA ID'}</dt><dd>{c.saqa}</dd></div>}
                    {c.nqf && <div><dt>NQF level / credits</dt><dd>{c.nqf} / {c.credits}</dd></div>}
                  </dl>
                  {c.image && <a className="btn small" href={asset(c.image)} target="_blank" rel="noreferrer">View certificate</a>}
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
        <Section id="education" title="Education">
          <Reveal>
            <div className="edu"><h3>Grade 10, 1998</h3><p>Reterong Secondary School</p><p className="subj">English · Geography · History · Science · Mathematics</p></div>
          </Reveal>
          <Reveal>
            <h3 className="subhead"><HardHat size={22} /> Safety & professional responsibility</h3>
            <ul className="safety">{safety.map(s => <li key={s}><CheckCircle2 size={18} />{s}</li>)}</ul>
          </Reveal>
        </Section>
        <section id="contact" className="contact">
          <div className="wrap">
            <Reveal>
              <h2>Experience. Leadership. Reliable Site Execution.</h2>
              <p className="lead">For professional enquiries, construction supervision opportunities, industrial projects and potential collaboration, please get in touch.</p>
              <ul className="facts big">
                <li><Mail size={18} /><a href={'mailto:' + profile.email}>{profile.email}</a></li>
                <li><Phone size={18} /><a href={'tel:' + profile.phoneLink}>{profile.phone}</a></li>
                <li><MapPin size={18} />{profile.location}</li>
              </ul>
              <div className="btns">
                <a className="btn primary" href={'mailto:' + profile.email}><Mail size={18} /> Email Me</a>
                <a className="btn ghost" href={'tel:' + profile.phoneLink}><Phone size={18} /> Call Me</a>
                <a className="btn ghost" href={asset(profile.cv)} download="Mzikayise_Nene_Professional_CV.pdf"><Download size={18} /> Download CV</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer><div className="wrap">© {new Date().getFullYear()} Mzikayise Nene</div></footer>
    </>
  )
}
