import Head from "next/head"
import Link from "next/link"
import ThemeToggle from "../components/ThemeToggle"
import { sourceCodePro as mono } from "../components/fonts"
import styles from "../styles/lab/a-page.module.scss"

const SAD_FACE = String.raw`
   _______________________________
  < sorry, this page isn't found! >
   -------------------------------
          \
           \   ,///////////////,
             ,///////////////////,
            ////'             '\\\\
            |//    _.-'   '-._   \\|
            |/     ( o)   (o )    \|
           (|        '     '       |)
            |    ;     / \     ;   |
            |    ;    (___)    ;   |
            |    '   ,=====,   '   |
            |       /  ___  \      |
             \        '   '       /
              '.                .'
                '-............-'
`

export default function Custom404() {
  return (
    <div className={`${styles.root} ${mono.className}`}>
      <Head><title>Page not found · Daniel Vasquez</title></Head>
      <div className={styles.toggle}><ThemeToggle /></div>

      <main className={styles.page}>
        <Link href="/">← Back home</Link>
        <pre className={styles.art} role="img" aria-label="ASCII sad face saying: sorry, this page isn't found!">
          {SAD_FACE}
        </pre>
      </main>
    </div>
  )
}
