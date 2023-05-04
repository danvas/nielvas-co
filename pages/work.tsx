import React from "react"
import Description from "../components/Description"
import {
  CodeSlashIcon,
  GitHubIcon,
  BoxArrowUpRightIcon,
  Link45DegIcon
} from "../components/Icons"
import Link from "next/link"


interface ProjectProps {
  year: string | number
  title: string
  subtitle: string
  description: string
  skills: string[]
  links: LinkProps[]
}

interface LinkProps {
  title: string
  url: string
  icon?: React.ReactNode
}

function ProjectCard(project: ProjectProps) {
  const { year, description, title, subtitle, skills, links } = project
  const descriptionLines = description.split("\n")

  return (
    <div className="nv-project-card text-dark" style={{ minWidth: "200px", maxWidth: "440px" }}>
      <div className="d-flex fs-4 align-items-center justify-content-between">
        <div className="me-2">{title}</div>
        <div className="fst-italic text-body-tertiary" style={{ fontSize: "1rem" }}>
          {year}
        </div>
      </div>
      <div className="pb-2 px-1">
        <div className="fw-light text-muted text-decoration-none">{subtitle}</div>
      </div>
      <div className="px-1"><Description lines={descriptionLines} /></div>

      <div className="text-muted fw-lighter">
        {skills.map((skill, idx) => <span key={idx}>{skill}{idx === skills.length - 1 ? null : " • "}</span>)}
      </div>
      <div className="d-flex pt-4 justify-content-between">
        {links.map((link) => {
          return (
            <a key={link.url} className="nv-outlined-link pt-1" href={link.url} target="_blank" >
              {link.icon}
              <span className="nv-responsive-label"> <u>{link.title}</u></span>
            </a>

          )
        })}
      </div>
    </div >
  )
}

function Work() {
  return (
    <div className="container p-4">
      <div className="d-flex flex-wrap gap-4">
        <div className="fw-light" style={{ minWidth: "200px", maxWidth: "440px" }}>
          <p>
            I'm always working on a client or personal project, but so far the work showcased here are personal projects.
            This page will frequently be updated. Check back soon for more or see my <a className="text-decoration-none" target="_blank" href="https://github.com/danvas">GitHub</a> repositories in the meantime.
          </p>
          <p>
            In case you're looking for my CV, take a look at <Link className="text-decoration-none" href="/resume">my resume</Link>.
          </p>
        </div>
        <ProjectCard
          year="2023"
          title="Spotyt"
          subtitle="Spotify playlist downloader"
          description={`API to allow Spotify users to find and download music from their or other users' public playlists.`}
          links={[
            {
              title: "Demo",
              url: "https://spotyt.nielvas.co",
              icon: <BoxArrowUpRightIcon size="16" className="mb-1" />
            },
            {
              title: "Source Code",
              url: "https://github.com/danvas/spotyt-dl",
              icon: <CodeSlashIcon size="18" className="mb-1" />
            },
          ]}
          skills={["Python", "Docker", "Google Cloud", "FastAPI", "React", "Spotify API"]}
        />
        <ProjectCard
          year="2019"
          title="Lyddy.stream"
          subtitle="Sound-sharing social networking web app"
          description={(
            `Lyddy allows users to post audio sources to their "home stream", \
            which can be organized with tags. \n A user's posts can be shared publicly or \
            with pre-approved followers. Users can browse and listen to other users' \
            content by tags. Users can "Like" posts, and follow other users to add their content \
            to the "home stream".`)}
          links={[
            {
              title: "App",
              url: "https://lyddy.stream/nielvas",
              icon: <BoxArrowUpRightIcon size="16" className="mb-1" />
            },
            {
              title: "Source Code",
              url: "https://bitbucket.org/danvasq/lyddy-stream/src/master/",
              icon: <CodeSlashIcon size="18" className="mb-1" />
            },
          ]}
          skills={["Javascript", "Firebase", "React", "Node.js"]}
        />
      </div>
    </div>
  )
}

export default Work

