import React from "react"
import Description from "../components/Description"
import {
  CodeSlashIcon,
  BoxArrowUpRightIcon,
} from "../components/Icons"
import Link from "next/link"
import cv from "../public/cv.json"


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

function parseProjectProps(projectData: any): ProjectProps {
  const { title, subtitle, endDate, details: description, links: linksData, skills } = projectData
  const LINK_TYPES_MAP = {
    "demo": {
      title: "Demo",
      icon: <BoxArrowUpRightIcon size="16" className="mb-1" />
    },
    "code": {
      title: "Source Code",
      icon: <CodeSlashIcon size="18" className="mb-1" />
    },
    "app": {
      title: "App",
      icon: <BoxArrowUpRightIcon size="16" className="mb-1" />
    }
  }
  const links = linksData.map(lnk => ({ ...LINK_TYPES_MAP[lnk.type], url: lnk.url }))

  return {
    title,
    subtitle,
    description,
    skills,
    links,
    year: endDate,
  }
}

function ProjectCard(project: ProjectProps) {
  const { year, description, title, subtitle, skills, links } = project
  const descriptionLines = description.split("\n")

  return (
    <div className="nv-project-card text-dark border border-light">
      <div className="d-flex fs-4 align-items-center justify-content-between">
        <div className="text-light me-2">{title}</div>
        <div className="text-body-tertiary" style={{ fontSize: "1rem" }}>
          {year}
        </div>
      </div>
      <div className="pb-2 px-1">
        <div className="fw-light opacity-75 text-muted text-decoration-none">{subtitle}</div>
      </div>
      <div className="px-1"><Description lines={descriptionLines} /></div>

      <div className="text-muted fw-lighter">
        {skills.map((skill, idx) => <span key={idx}>{skill}{idx === skills.length - 1 ? null : " • "}</span>)}
      </div>
      <div className="d-flex pt-4 justify-content-between">
        {links.map((link) => {
          return (
            <a key={link.url} className="pt-1" href={link.url} target="_blank" >
              {link.icon}
              <span className=""> <u>{link.title}</u></span>
            </a>

          )
        })}
      </div>
    </div >
  )
}

function Work() {
  return (
    <div className="container pt-5">
      <div className="d-flex flex-wrap gap-4">
        <div className="fw-light fs-5 nv-project-card">
          <p>
            I'm always working on a client or personal project, but the works currently showcased here are personal projects.
            This page will frequently be updated. Check back soon for more or see my <a className="text-decoration-none" target="_blank" href="https://github.com/danvas">GitHub</a> repositories in the meantime.
          </p>
          <p>
            In case you're looking for my CV, take a look at <Link className="text-decoration-none" href="/resume">my resume</Link>.
          </p>
        </div>
        {cv.projects
          .sort((a, b) => parseInt(b.endDate) - parseInt(a.endDate))
          .map(project =>
            <ProjectCard key={project.title} {...parseProjectProps(project)} />
          )}
      </div>
    </div>
  )
}

export default Work

