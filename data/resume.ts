import cv from "../public/cv.json"

// Same selection as the original /resume page.
const MAX_EXPERIENCES = 5
export const experiences = cv.experience.filter((e) => e.company !== "nielvas.co").slice(0, MAX_EXPERIENCES)
export const educations = cv.education.filter((e) => !e.degree.includes("MSc"))
export const publications = cv.publications

// Title of the current role, so the resume header always matches the latest job.
export const currentTitle =
  experiences[0]?.endDate === "Present" ? experiences[0].title : "Software Engineer"

export const skills = cv.skills.split(",").map((s) => s.trim()).filter(Boolean)

export const yearOf = (date?: string | number) => (date ? String(date).split(" ").pop() : "")

// Short form for the on-screen year column, e.g. "2019–2022" or "2025–now".
export function yearRange(start?: string | number, end?: string | number) {
  const from = yearOf(start)
  const to = end === "Present" ? "now" : yearOf(end)
  return !to || from === to ? from : `${from}–${to}`
}

// "April 2025" → "Apr 2025", "July 31, 2015" → "Jul 2015", "2016" → "2016".
export function monthYear(date?: string | number) {
  if (!date) return ""
  const text = String(date)
  if (text === "Present") return text
  const year = text.match(/\d{4}/)?.[0] ?? ""
  const month = text.match(/^[A-Za-z]{3}/)?.[0]
  return month ? `${month} ${year}` : year
}

// Long form for print, which resume parsers read best, e.g. "Apr 2025 – Present".
export function dateRange(start?: string | number, end?: string | number) {
  const from = monthYear(start)
  const to = monthYear(end)
  return !to || from === to ? from : `${from} – ${to}`
}
