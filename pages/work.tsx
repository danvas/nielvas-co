import Head from "next/head"
import Link from "next/link"
import ThemeToggle from "../components/ThemeToggle"
import { sourceCodePro as mono } from "../components/fonts"
import cv from "../public/cv.json"
import styles from "../styles/lab/a-page.module.scss"

const LINK_LABELS = { demo: "Demo", code: "Source Code", app: "Link" }

const projects = [...cv.projects].sort((a, b) => parseInt(b.endDate) - parseInt(a.endDate))

function Work() {
  return (
    <div className={`${styles.root} ${mono.className}`}>
      <Head><title>Work · Daniel Vasquez</title></Head>
      <div className={styles.toggle}><ThemeToggle /></div>

      <article className={styles.page}>
        <Link href="/">← Back</Link>
        <h1 className={styles.title}>Work</h1>

        <div className={styles.paragraph}>
          I'm always working on a client or personal project, but the works currently showcased here are personal projects.
          This page will frequently be updated. Check back soon for more or see my <a href="https://github.com/danvas" target="_blank" rel="noreferrer">GitHub</a> repositories in the meantime.
        </div>
        <div className={styles.paragraph}>
          In case you're looking for my CV, take a look at <Link href="/resume">my resume</Link>.
        </div>

        <div className={styles.projects}>
          {projects.map((p) => (
            <section key={p.title} className={styles.project}>
              <div className={styles.muted}>{p.endDate}</div>
              <div>
                <div className={styles.projectTitle}>{p.title.trim()}</div>
                <div className={styles.muted}>{p.subtitle}</div>
                <div className={styles.details}>
                  {p.details.split("\n").filter(Boolean).map((line) => <div key={line} className={styles.detail}>{line}</div>)}
                </div>
                <div className={styles.skills}>{p.skills.join(", ")}</div>
                <div className={styles.links}>
                  {p.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                      {LINK_LABELS[link.type]} ↗
                    </a>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  )
}

export default Work
