import Head from "next/head"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import ThemeToggle from "../components/ThemeToggle"
import Location from "../components/Location"
import Editable from "../components/Editable"
import { PrinterFillIcon } from "../components/Icons"
import { track } from "../lib/analytics"
import { sourceCodePro as mono } from "../components/fonts"
import cv from "../public/cv.json"
import {
  currentTitle,
  dateRange,
  educations,
  experiences,
  publications,
  skills,
  yearOf,
  yearRange,
} from "../data/resume"
import styles from "../styles/lab/a-resume.module.scss"

const PAGE_TITLE = "Resume · Daniel Vasquez"
// Browsers suggest the document title as the PDF file name; keep it plain for upload forms.
const PRINT_TITLE = "Daniel-Vasquez-Resume"

const lines = (text?: string) => (text ? text.split("\n").filter(Boolean) : [])

// Edits made on the page are kept in this browser only (e.g. to tailor a printout);
// cv.json, generated from Google Docs, stays the source of truth.
const EDITS_KEY = "lab-a-resume-edits"

interface Edits {
  title?: string
  summary?: string
  skills?: string
  hideSkills?: boolean
  bullets?: Record<string, string[]>
  hiddenExperience?: string[] // entry ids
  hiddenEducation?: string[] // school names
  details?: Record<string, string[]> // publication title → paragraphs
  hiddenDetails?: string[] // publication titles
}

const originalSkills = skills.join(", ")

// Typed anywhere outside the text (keys within SEQUENCE_GAP_MS of each other):
// "edit" toggles edit mode, "reset" discards all edits. Esc leaves edit mode.
const EDIT_SEQUENCE = "edit"
const RESET_SEQUENCE = "reset"
const SEQUENCE_GAP_MS = 1000

const entryId = (e: { company: string; startDate: string }) => `${e.company}-${e.startDate}`
const toggled = (list: string[] = [], item: string) =>
  list.includes(item) ? list.filter((x) => x !== item) : [...list, item]

const hasEdits = (edits: Edits) =>
  edits.title !== undefined ||
  edits.summary !== undefined ||
  edits.skills !== undefined ||
  !!edits.hideSkills ||
  Object.keys(edits.bullets ?? {}).length > 0 ||
  (edits.hiddenExperience ?? []).length > 0 ||
  (edits.hiddenEducation ?? []).length > 0 ||
  Object.keys(edits.details ?? {}).length > 0 ||
  (edits.hiddenDetails ?? []).length > 0

// Resume: same look as the home page on screen, black-on-white letter pages in print.
// Markup is in reading order (title → company · dates → bullets) so resume parsers
// (ATS) extract each entry correctly; the on-screen year column is placed by CSS grid.
function Resume() {
  // Fixed time zone so the build server and every visitor's browser show the same date.
  const lastModified = new Date(cv.lastModified).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Vancouver",
  })

  const [edits, setEdits] = useState<Edits>({})
  const [editMode, setEditMode] = useState(false)
  const editModeRef = useRef(false)
  editModeRef.current = editMode
  const [notice, setNotice] = useState<string | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(EDITS_KEY)
      if (saved) setEdits(JSON.parse(saved))
    } catch {
      // Storage unavailable (private window, blocked site data): editing still works for this visit.
    }
  }, [])

  const saveEdits = (next: Edits) => {
    setEdits(next)
    try {
      if (hasEdits(next)) localStorage.setItem(EDITS_KEY, JSON.stringify(next))
      else localStorage.removeItem(EDITS_KEY)
    } catch {
      // Ignore; see above.
    }
  }

  // An edit that matches the original text removes the override.
  const saveSummary = ([text = ""]: string[]) => {
    const { summary, ...rest } = edits
    saveEdits(text === cv.highlights ? rest : { ...rest, summary: text })
  }

  const saveTitle = ([text = ""]: string[]) => {
    const { title: _, ...rest } = edits
    saveEdits(text === currentTitle ? rest : { ...rest, title: text })
  }

  const saveSkills = ([text = ""]: string[]) => {
    const { skills: _, ...rest } = edits
    saveEdits(text === originalSkills ? rest : { ...rest, skills: text })
  }

  const toggleSkills = () => {
    const { hideSkills, ...rest } = edits
    saveEdits(hideSkills ? rest : { ...rest, hideSkills: true })
  }

  const toggleExperience = (id: string) => {
    saveEdits({ ...edits, hiddenExperience: toggled(edits.hiddenExperience, id) })
  }

  const toggleEducation = (school: string) => {
    saveEdits({ ...edits, hiddenEducation: toggled(edits.hiddenEducation, school) })
  }

  const saveDetails = (title: string, original: string[], next: string[]) => {
    const { [title]: _, ...others } = edits.details ?? {}
    const same = next.join("\n") === original.join("\n")
    saveEdits({ ...edits, details: same ? others : { ...others, [title]: next } })
  }

  const toggleDetails = (title: string) => {
    saveEdits({ ...edits, hiddenDetails: toggled(edits.hiddenDetails, title) })
  }

  const saveBullets = (id: string, original: string[], next: string[]) => {
    const { [id]: _, ...others } = edits.bullets ?? {}
    const same = next.join("\n") === original.join("\n")
    saveEdits({ ...edits, bullets: same ? others : { ...others, [id]: next } })
  }

  useEffect(() => {
    let typed = ""
    let lastKeyAt = 0
    let noticeTimer: ReturnType<typeof setTimeout>

    const flash = (message: string) => {
      setNotice(message)
      clearTimeout(noticeTimer)
      noticeTimer = setTimeout(() => setNotice(null), 2000)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (editModeRef.current) {
          // Blurring saves the text being edited.
          ;(document.activeElement as HTMLElement | null)?.blur()
          setEditMode(false)
        }
        return
      }
      // Ignore typing inside the text itself, shortcuts, and non-character keys.
      if ((e.target as HTMLElement).isContentEditable) return
      if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return

      const now = Date.now()
      typed = (now - lastKeyAt > SEQUENCE_GAP_MS ? "" : typed) + e.key.toLowerCase()
      lastKeyAt = now

      if (typed.endsWith(EDIT_SEQUENCE)) {
        typed = ""
        setEditMode((on) => !on)
      } else if (typed.endsWith(RESET_SEQUENCE)) {
        typed = ""
        saveEdits({})
        flash("Edits reset")
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      clearTimeout(noticeTimer)
    }
  }, [])

  useEffect(() => {
    const before = () => {
      document.title = PRINT_TITLE
      track("print_resume")
    }
    const after = () => { document.title = PAGE_TITLE }
    window.addEventListener("beforeprint", before)
    window.addEventListener("afterprint", after)
    return () => {
      window.removeEventListener("beforeprint", before)
      window.removeEventListener("afterprint", after)
    }
  }, [])

  return (
    <div className={`${styles.root} ${mono.className}`}>
      <Head><title>{PAGE_TITLE}</title></Head>
      <div className={styles.toggle}><ThemeToggle /></div>

      <nav className={styles.toolbar}>
        <Link href="/">← Back</Link>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.print}
            onClick={() => window.print()}
            aria-label="Print or save as PDF"
            title="Print / Save as PDF"
          >
            <PrinterFillIcon />
          </button>
        </div>
      </nav>

      <article className={styles.page}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.name}>{cv.name}</h1>
            <Editable
              className={styles.muted}
              lines={[edits.title ?? currentTitle]}
              onSave={saveTitle}
              enabled={editMode}
              editableClassName={styles.editable}
            />
          </div>
          <ul className={styles.contact}>
            <li><a href="mailto:d@nielvas.co" onClick={() => track("contact_click", { method: "email" })}>d@nielvas.co</a></li>
            <li><a href="https://nielvas.co">nielvas.co</a></li>
            <li><a href="https://www.linkedin.com/in/danvas" onClick={() => track("contact_click", { method: "linkedin" })}>linkedin.com/in/danvas</a></li>
            <li className={styles.muted}><Location /></li>
          </ul>
        </header>

        <section className={styles.section}>
          <h2 className={styles.label}>Summary</h2>
          <Editable
            className={styles.summary}
            lines={[edits.summary ?? cv.highlights]}
            onSave={saveSummary}
            enabled={editMode}
            editableClassName={styles.editable}
          />
        </section>

        {/* Hidden Skills only shows (faded) in edit mode, so it can be brought back. */}
        {(editMode || !edits.hideSkills) && (
          <section className={`${styles.section} ${styles.skillsSection} ${edits.hideSkills ? styles.hiddenEntry : ""}`}>
            {editMode && (
              <button type="button" className={styles.entryToggle} onClick={toggleSkills}>
                {edits.hideSkills ? "Show" : "Hide"}
              </button>
            )}
            <h2 className={styles.label}>Skills</h2>
            <Editable
              className={styles.summary}
              lines={[edits.skills ?? originalSkills]}
              onSave={saveSkills}
              enabled={editMode}
              editableClassName={styles.editable}
            />
          </section>
        )}

        {(editMode || experiences.some((e) => !edits.hiddenExperience?.includes(entryId(e)))) && (
          <section className={styles.section}>
            <h2 className={styles.label}>Experience</h2>
            {experiences.map((e) => {
              const id = entryId(e)
              const original = lines(e.description)
              const hidden = edits.hiddenExperience?.includes(id)
              // Hidden entries only show (faded) in edit mode, so they can be brought back.
              if (hidden && !editMode) return null
              return (
                <div key={id} className={`${styles.entry} ${hidden ? styles.hiddenEntry : ""}`}>
                  {editMode && (
                    <button type="button" className={styles.entryToggle} onClick={() => toggleExperience(id)}>
                      {hidden ? "Show" : "Hide"}
                    </button>
                  )}
                  <div className={styles.entryTitle}>{e.title}</div>
                  <div className={styles.meta}>
                    <a href={e.url} target="_blank" rel="noreferrer">{e.company}</a>
                    <span className={styles.printOnly}> · {dateRange(e.startDate, e.endDate)}</span>
                  </div>
                  <div className={styles.years}>{yearRange(e.startDate, e.endDate)}</div>
                  <Editable
                    list
                    className={styles.bullets}
                    lines={edits.bullets?.[id] ?? original}
                    onSave={(next) => saveBullets(id, original, next)}
                    enabled={editMode}
                    editableClassName={styles.editable}
                  />
                </div>
              )
            })}
          </section>
        )}

        {(editMode || educations.some((e) => !edits.hiddenEducation?.includes(e.school))) && (
          <section className={styles.section}>
            <h2 className={styles.label}>Education</h2>
            {educations.map((e) => {
              const hidden = edits.hiddenEducation?.includes(e.school)
              // Hidden entries only show (faded) in edit mode, so they can be brought back.
              if (hidden && !editMode) return null
              return (
                <div key={e.school} className={`${styles.entry} ${hidden ? styles.hiddenEntry : ""}`}>
                  {editMode && (
                    <button type="button" className={styles.entryToggle} onClick={() => toggleEducation(e.school)}>
                      {hidden ? "Show" : "Hide"}
                    </button>
                  )}
                  <div className={styles.entryTitle}>
                    {e.degree}{e.fieldOfStudy ? `, ${e.fieldOfStudy}` : ""}
                  </div>
                  <div className={styles.meta}>
                    <a href={e.url} target="_blank" rel="noreferrer">{e.school}</a>
                    <span className={styles.printOnly}> · {dateRange(e.startDate, e.endDate)}</span>
                  </div>
                  <div className={styles.years}>{yearRange(e.startDate, e.endDate)}</div>
                </div>
              )
            })}
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.label}>Publications</h2>
          {publications.map((p) => {
            const original = lines(p.detailsResume || p.details)
            const hidden = edits.hiddenDetails?.includes(p.title)
            return (
              <div key={p.title} className={styles.entry}>
                {editMode && (
                  <button type="button" className={styles.entryToggle} onClick={() => toggleDetails(p.title)}>
                    {hidden ? "Show description" : "Hide description"}
                  </button>
                )}
                <a className={styles.entryTitle} href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
                <div className={styles.meta}>
                  {p.publisher}
                  <span className={styles.printOnly}> · {dateRange(p.date)}</span>
                </div>
                <div className={styles.years}>{yearOf(p.date)}</div>
                {/* A hidden description only shows (faded) in edit mode, so it can be brought back. */}
                {(editMode || !hidden) && (
                  <div className={`${styles.details} ${hidden ? styles.hiddenEntry : ""}`}>
                    <Editable
                      list
                      className={styles.paragraphs}
                      lines={edits.details?.[p.title] ?? original}
                      onSave={(next) => saveDetails(p.title, original, next)}
                      enabled={editMode}
                      editableClassName={styles.editable}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </section>

        <footer className={styles.footer}>Last updated {lastModified}</footer>
      </article>

      {(editMode || notice) && (
        <div className={styles.badge} role="status">
          {notice ?? "Editing · Esc to finish"}
        </div>
      )}
    </div>
  )
}

export default Resume
