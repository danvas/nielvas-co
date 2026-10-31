import Head from "next/head"
import Link from "next/link"
import { GetStaticPaths, GetStaticProps } from "next"
import ThemeToggle from "../../../../components/ThemeToggle"
import { sourceCodePro as mono } from "../../../../components/fonts"
import posts, { Post, formatDate } from "../../../../data/posts"
import styles from "../../../../styles/lab/a-post.module.scss"

// Design A post page, generated for every post with a slug and body.
function LabAPost({ post }: { post: Post }) {
  return (
    <div className={`${styles.root} ${mono.className}`}>
      <Head><title>{`${post.title} · Daniel Vasquez`}</title></Head>
      <div className={styles.toggle}><ThemeToggle /></div>

      <article className={styles.page}>
        <Link className={styles.back} href="/lab/a">← Back</Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <time className={styles.date} dateTime={post.date}>{formatDate(post.date)}</time>
        </header>

        {post.body.map((block, i) => {
          if (block.type === "heading") return <h2 key={i} className={styles.heading}>{block.text}</h2>
          if (block.type === "code") return <pre key={i} className={styles.code}><code>{block.text}</code></pre>
          return <div key={i} className={styles.paragraph}>{block.text}</div>
        })}
      </article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: posts.filter((p) => p.slug && p.body).map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = ({ params }) => ({
  props: { post: posts.find((p) => p.slug === params.slug) },
})

export default LabAPost
