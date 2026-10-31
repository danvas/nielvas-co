import Head from "next/head"
import Link from "next/link"
import ThemeToggle from "../components/ThemeToggle"
import Location from "../components/Location"
import { sourceCodePro as mono } from "../components/fonts"
import { track } from "../lib/analytics"
import { experiences, yearRange } from "../data/resume"
import styles from "../styles/lab/a.module.scss"

const trackContact = (method: string) => () => track("contact_click", { method })

// Home page: three columns of contact | summary | experience.
function Home() {
  return (
    <div className={`${styles.root} ${mono.className}`}>
      <Head><title>Daniel Vasquez</title></Head>
      <div className={styles.toggle}><ThemeToggle /></div>

      <div className={styles.layout}>
        <aside className={styles.contact}>
          <div className={styles.label}>Contact</div>
          <ul className={styles.links}>
            <li><a href="mailto:d@nielvas.co" onClick={trackContact("email")}>d@nielvas.co</a></li>
            <li><a href="https://www.linkedin.com/in/danvas" target="_blank" rel="noreferrer" onClick={trackContact("linkedin")}>LinkedIn</a></li>
            <li><a href="https://github.com/danvas" target="_blank" rel="noreferrer" onClick={trackContact("github")}>GitHub</a></li>
            <li><a href="https://www.imdb.com/name/nm9678054/" target="_blank" rel="noreferrer" onClick={trackContact("imdb")}>IMDb</a></li>
          </ul>
          <div className={styles.muted}><Location /></div>
        </aside>

        <main className={styles.main}>
          <section className={styles.summary}>
            <h1 className={styles.name}>Daniel Vasquez</h1>
            <div className={styles.bio}>
              I build 3D tools and automation pipelines for games, film VFX, and apparel. I've shipped artist
              tools in EA's Frostbite engine, pipelines for films like <em>Black Panther</em>, and a cloud
              rendering platform at a startup that was later acquired. I currently lead 3D tooling at lululemon.
            </div>
            <div className={styles.bio}>
              I'm now exploring how machine learning and graphics engineering can work together, building tools
              for immersive experiences, visual storytelling, and scientific discovery.
            </div>
            <nav className={styles.pages}>
              <Link href="/work">Work →</Link>
              <Link href="/about">About →</Link>
            </nav>
          </section>
        </main>

        <aside className={styles.resume}>
          <div className={styles.label}>Experience</div>
          <ul className={styles.entries}>
            {experiences.map((e) => (
              <li key={`${e.company}-${e.startDate}`}>
                <div className={styles.muted}>{yearRange(e.startDate, e.endDate)}</div>
                <div className={styles.entryTitle}>{e.title}</div>
                <a href={e.url} target="_blank" rel="noreferrer">{e.company}</a>
              </li>
            ))}
          </ul>

          <Link className={styles.pdf} href="/resume" onClick={() => track("resume_click")}>Full resume →</Link>
        </aside>
      </div>
    </div>
  )
}

export default Home
