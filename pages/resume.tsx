import React, { useState } from "react"
import cv from '../public/cv.json'

interface ExperienceProps {
  title: string
  url: string
  company: string
  startDate: string
  endDate: string
  duration: string
  location: string
  description: string
  skills: string[]
}

function DateRangePrintable({ start, end }: { start: any, end?: any }) {
  let dateRange = `${start}`
  if (end) {
    dateRange += ` - ${end}`
  }

  return (
    <>
      <span className="text-nowrap d-print-block d-none">
        {dateRange}
      </span>
      <span className="text-lg-wrap d-print-none">
        {dateRange}
      </span>
    </>
  )
}

function Description({ lines }) {
  const [expanded, setExpanded] = useState(false)
  const [leadingLine, ...expandedLines] = lines
  return (
    <div>
      <p>{leadingLine}
        {!expanded &&

          <span
            className="fw-light text-nowrap text-black-50 fw-bold d-print-none pointer-cursor"
            hidden={lines.length === 1}
            onClick={() => setExpanded(true)}
          >
            <small> ... See more</small>
          </span>
        }
      </p>
      <div className={`lh-sm d-print-block ${expanded ? "" : "d-none"}`}>
        {expandedLines.map((line, idx) => <p key={idx}>{line}</p>)}
      </div>
      {expanded && <span
        className="fw-light text-nowrap text-black-50 fw-bold d-print-none"
        style={{ cursor: "pointer" }}
        hidden={lines.length === 1}
        onClick={() => setExpanded(false)}
      >
        <small> ... See less</small>
      </span>}
    </div>
  )
}

function ExperienceRow(experience: ExperienceProps) {
  const descriptionLines = experience.description.split('\n')
  const [, startYear] = experience.startDate.split(" ")
  const [, endYear] = experience.endDate.split(" ")

  return (
    <div className="row py-3 align-items-baseline">
      <div className="col-2 text-muted">
        <DateRangePrintable start={startYear} end={endYear} />
      </div>
      <div className="col">
        <div className="fs-5">{experience.title}</div>
        <div className="pb-1">
          <a
            className="fw-light fst-italic text-muted text-decoration-none"
            target="_blank"
            href={experience.url}
          >
            {experience.company}
          </a>
        </div>
        <Description lines={descriptionLines} />
        <div className="text-muted fw-lighter">
          {experience.skills.map((skill, idx) => <span key={idx}>{skill}{idx === experience.skills.length - 1 ? null : " • "}</span>)}
        </div>
      </div>
    </div>)
}


function Resume() {
  const MAX_IDX = 5
  const dateModified = new Date(cv.lastModified).toDateString()
  const experiences = cv.experience.filter(e => e.company !== "nielvas.co").slice(0, MAX_IDX)
  const educations = cv.education.filter(e => !e.degree.includes("MSc"))

  return (
    <div className="container px-sm-5 resume-print">
      <section className="py-5 d-print-block d-none">
        <div className="d-flex justify-content-between align-items-center">
          <div className="display-3 text-uppercase text-nowrap fw-lighter">Daniel Vasquez</div>
          <div className="ps-2 fw-light fs-8 text-end">
            <small>
              <div><a className="text-decoration-none text-muted" target="_blank" href="mailto:d@nielvas.co?&amp;subject=Hello%20👋">d@nielvas.co</a></div>
              <div><a className="text-decoration-none text-muted" target="_blank" href="https://nielvas.co">www.nielvas.co</a></div>
              <div className="text-nowrap">Vancouver, Canada</div>
            </small>
          </div>
        </div>
      </section>
      <section className="py-3 d-print-block d-none" id="profile-section">
        <div className="row">
          <div className="col">
            <div className="fs-5 fw-light text-uppercase">Profile</div>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-2"></div>
          <div className="col">
            <div>{cv.profile}</div>
          </div>
          <div></div>
        </div>
      </section>
      <section className="py-3" id="experience-section">
        <div className="row">
          <div className="col">
            <div className="fs-5 fw-light text-uppercase">Work Experience</div>
          </div>
        </div>
        {experiences.map((experience, idx) => <ExperienceRow key={idx} {...experience} />)}
      </section>
      <div className="pagebreak-after"></div>
      <section className="py-3" id="education-section">
        <div className="row">
          <div className="col">
            <div className="fs-5 fw-light text-uppercase">Education</div>
          </div>
        </div>
        {educations.map((education, idx) => (
          <div className="row py-2 align-items-baseline" key={idx}>
            <div className="col-2 text-muted">
              <DateRangePrintable start={education.startDate} end={education.endDate} />
            </div>
            <div className="col">
              <a className="fs-5 text-decoration-none text-dark" target="_blank" href={education.url}>{education.school}</a>
              <p className="fw-light">{education.degree}{education.fieldOfStudy ? " - " : null}{education.fieldOfStudy}</p>
            </div>
          </div>)
        )}
      </section>
      <section className="py-3" id="publications-section">
        <div className="row">
          <div className="col">
            <div className="fs-5 fw-light text-uppercase">Publications</div>
          </div>
        </div>
        {cv.publications
          .map((publication, idx) => (
            <div className="row py-2 align-items-baseline" key={idx}>
              <div className="col-2 text-muted">
                <DateRangePrintable start={new Date(publication.date).getFullYear()} />
              </div>
              <div className="col">
                <div className="pb-1">
                  <a className="fs-5 text-decoration-none text-dark"
                    target="_blank"
                    href={publication.url}
                  >
                    {publication.title}
                  </a>
                </div>
                <p className="fw-light">{publication.publisher}</p>
                <div>{publication.details.split('\n').map((line, idx) => <p key={idx}>{line}</p>)}</div>
              </div>
              <div></div>
            </div>)
          )}
      </section>
      <div className="py-5 d-flex justify-content-between align-items-center">
        <div className="small text-black-50 text-end d-print-none">Updated: {dateModified}</div>

      </div>
    </div>
  )
}

export default Resume

