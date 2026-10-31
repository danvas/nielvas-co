import Head from "next/head"
import Link from "next/link"
import ThemeToggle from "../components/ThemeToggle"
import { sourceCodePro as mono } from "../components/fonts"
import styles from "../styles/lab/a-page.module.scss"

function About() {
  return (
    <div className={`${styles.root} ${mono.className}`}>
      <Head><title>About · Daniel Vasquez</title></Head>
      <div className={styles.toggle}><ThemeToggle /></div>

      <article className={styles.page}>
        <Link href="/">← Back</Link>
        <h1 className={styles.title}>About</h1>

        <div className={styles.lead}>
          I enjoy building automated workflows and applications that facilitate the creative process at organizations that are making an impact in immersive and interactive experiences, visual storytelling, or tools for scientific discovery.
        </div>

        <div className={styles.paragraph}>
          I'm currently a Senior Software Engineer at <a href="https://corporate.lululemon.com/" target="_blank" rel="noreferrer">lululemon</a>, building 3D tools and automated rendering pipelines for apparel design. Previously, I was a Technical Artist II at <a href="https://www.ea.com/ea-studios/ea-sports" target="_blank" rel="noreferrer">Electronic Arts</a> working on artist tools in Frostbite Engine and optimizing content creation pipelines. I was also a software engineer at the startup <em>FNX Technologies</em> where I helped build a rendering-as-a-service product for leading fashion & apparel brands.
          We eventually got acquired by <a href="https://unifi3d.co/" target="_blank" rel="noreferrer">UNIFI3D</a> (<em>Li & Fung, Ltd</em>)
          where I continued to build automated workflows and integrated 3D collaboration solutions in their proprietary digital asset management system.
          In the previous 4+ years, I developed tools for artists and technical directors in the visual effects production pipeline in feature films
          such as <em>Black Panther</em> and <em>Guardians of the Galaxy</em>.
          Check out the <a href="https://www.imdb.com/name/nm9678054/" target="_blank" rel="noreferrer">films I've work on</a>.
        </div>
        <div className={styles.paragraph}>
          My deep appreciation for music led me to create <em>Lyddy</em> — a sound-sharing social networking web app aimed at uniting people through sound, allowing them to explore genres by means of hashtags. Have a listen at <a href="https://lyddy.stream/nielvas" target="_blank" rel="noreferrer">my stream</a>.
        </div>
        <div className={styles.paragraph}>
          Other things I love include visual effects, <a href="https://vimeo.com/danielvasquez" target="_blank" rel="noreferrer">filmmaking</a>, sailing, hiking, and the ocean. I also had fun teaching science & math at a <a href="https://www.eibparis.com/en" target="_blank" rel="noreferrer">high school</a> in Paris, France.
          Take a look at <Link href="/resume">my resume </Link> for more things that I've done.
        </div>
        <div className={styles.paragraph}>I live and work in Vancouver, Canada &#8212; the unceded territories of the <a href="https://www.musqueam.bc.ca" target="_blank" rel="noreferrer">xʷməθkʷəy̓əm</a>, <a href="https://www.squamish.net" target="_blank" rel="noreferrer">Sḵwx̱wú7mesh</a> and <a href="https://twnation.ca" target="_blank" rel="noreferrer">səl̓ílwətaʔɬ</a> Nations.</div>
        <div className={styles.paragraph}>
          Want to get in touch? I'm on <a href="https://www.linkedin.com/in/danvas" target="_blank" rel="noreferrer">LinkedIn</a> and <a href="https://github.com/danvas" target="_blank" rel="noreferrer">GitHub</a>. Feel free to reach out!
        </div>


        <a className={styles.hello} href="mailto:d@nielvas.co?&amp;subject=Hello%20👋" target="_blank" rel="noreferrer">
          Say Hello →
        </a>
      </article>
    </div>
  )
}

export default About
