import Head from "next/head"
import Link from "next/link"
import ThemeToggle from "../components/ThemeToggle"
import { sourceCodePro as mono } from "../components/fonts"
import sadFace from "../data/sadFace"
import styles from "../styles/lab/a-page.module.scss"

export default function Custom404() {
  return (
    <div className={`${styles.root} ${mono.className}`}>
      <Head><title>Page not found · Daniel Vasquez</title></Head>
      <div className={styles.toggle}><ThemeToggle /></div>

      <main className={styles.page}>
        <Link href="/">← Back home</Link>
        <h1 className={styles.notFound}>sorry, this page isn't found!</h1>
        <pre className={styles.art} aria-hidden="true">{sadFace}</pre>
      </main>
    </div>
  )
}
