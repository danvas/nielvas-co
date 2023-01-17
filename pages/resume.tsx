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

  const onPrintDocument = () => {
    const originalTitle = document.title
    const year = new Date().getFullYear()
    document.title = `Daniel Vasquez CV ${year}`
    window.print()
    document.title = originalTitle
  }

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
        <div className="btn btn-sm small text-black-50 text-end d-print-none" onClick={onPrintDocument}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M16 8.625v-3H8v3H7v-3.2q0-.35.238-.575.237-.225.562-.225h8.375q.375 0 .6.225.225.225.225.575v3.2Zm-11.425 1h14.85H7Zm13.05 2.5q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-9 6.875h6.75q.275 0 .45-.175t.175-.45V14.45H8v3.925q0 .275.175.45t.45.175Zm0 1q-.675 0-1.15-.475Q7 19.05 7 18.375V16H4.375q-.325 0-.563-.238-.237-.237-.237-.562v-4.575q0-.85.575-1.425.575-.575 1.425-.575h12.85q.85 0 1.425.575.575.575.575 1.425V15.2q0 .325-.237.562-.238.238-.563.238H17v2.375q0 .675-.475 1.15-.475.475-1.15.475Zm10.8-5v-4.375q0-.425-.287-.713-.288-.287-.713-.287H5.575q-.425 0-.712.287-.288.288-.288.713V15H7v-1.55h10V15Z" /></svg>
          Print
        </div>
        <div className="small text-black-50 text-end d-print-none">Last updated: {dateModified}</div>

      </div>
    </div>
  )
}

export default Resume

