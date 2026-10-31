import Head from "next/head"
import Link from "next/link"
import ThemeToggle from "../../../components/ThemeToggle"
import Location from "../../../components/Location"
import { sourceCodePro as mono } from "../../../components/fonts"
import { track } from "../../../lib/analytics"
import { experiences, yearRange } from "../../../data/resume"
import posts, { formatDate } from "../../../data/posts"
import styles from "../../../styles/lab/a.module.scss"

const trackContact = (method: string) => () => track("contact_click", { method })

// Variant A — simple three-column page: contact | summary + posts | experience.
function LabA() {
  return (
    <div className={`${styles.root} ${mono.className}`}>
      <Head><title>Lab A · Daniel Vasquez</title></Head>
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
          </section>

          <section>
            <div className={styles.label}>Writing</div>
            <ol className={styles.posts}>
              {posts.map((post) => (
                <li key={post.title} className={styles.post}>
                  <time className={styles.date} dateTime={post.date}>{formatDate(post.date)}</time>
                  <div>
                    <div className={styles.postTitle}>{post.title}</div>
                    <div className={styles.muted}>{post.summary}</div>
                    {post.slug && post.body && (
                      <Link className={styles.readMore} href={`/lab/a/writing/${post.slug}`}>
                        Read more <span className={styles.arrow} aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
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

          <Link className={styles.pdf} href="/lab/a/resume" onClick={() => track("resume_click")}>Full resume →</Link>
        </aside>
      </div>
    </div>
  )
}

export default LabA
