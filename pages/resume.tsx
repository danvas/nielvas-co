import React from "react"
import Description from "../components/Description"
import cv from '../public/cv.json'
import { FileEarmarkArrowDownIcon } from "../components/Icons"



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

  const onDownloadResume = () => {
    const filename = "Daniel-Vasquez-Resume.pdf"
    fetch(`/${filename}`)
      .then(res => res.blob())
      .then(blob => {
        const linkEl = document.createElement("a")
        linkEl.href = window.URL.createObjectURL(blob);
        linkEl.download = filename;
        linkEl.click();
      });
  }

  return (
    <div className="container px-2 resume-print">
      <div className="d-flex justify-content-around align-items-center p-2 d-print-none">
        <button
          type="button"
          onClick={onDownloadResume}
          className="btn btn-outline-light btn-lg rounded-pill"
        >
          <span className="py-5 pe-2">
            Download PDF
          </span>
          <FileEarmarkArrowDownIcon size="23" className="mb-1" />
        </button>
      </div>
      <div className="row pt-4 d-print-none">
        <hr className="w-50 mx-auto" />
      </div>
      <section className="py-2 d-print-block">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="display-4 text-nowrap fw-light">Daniel Vasquez</div>
            <div className="fs-5 text-dark">Software Engineer</div>
          </div>
          <div className="ps-2 fw-light fs-8">
            <small>
              <div><a className="text-decoration-none text-muted" target="_blank" href="mailto:d@nielvas.co?&amp;subject=Hello%20👋">d@nielvas.co</a></div>
              <div><a className="text-decoration-none text-muted" target="_blank" href="https://nielvas.co">www.nielvas.co</a></div>
              <div className="text-wrap">Vancouver, Canada</div>
            </small>
          </div>
        </div>
      </section>
      <section className="py-3 d-print-block" id="profile-section">
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

