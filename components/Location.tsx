import { MouseEvent, useEffect, useRef, useState } from "react"
import styles from "../styles/lab/a-location.module.scss"

// Same names, spelling and links as the About page.
const NATIONS = [
  { name: "xʷməθkʷəy̓əm", url: "https://www.musqueam.bc.ca" },
  { name: "Sḵwx̱wú7mesh", url: "https://www.squamish.net" },
  { name: "səl̓ílwətaʔɬ", url: "https://twnation.ca" },
]

const NationLink = ({ name, url }: { name: string; url: string }) => (
  <a href={url} target="_blank" rel="noreferrer">{name}</a>
)

// City that swaps to the Nations' names on hover, tap or keyboard focus.
// Print keeps only the city, so resume parsers get a plain location.
function Location() {
  const [musqueam, squamish, tsleilWaututh] = NATIONS
  const [openedByTap, setOpenedByTap] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const lastPointerType = useRef("")

  // A tap applies :hover and then clicks, so without this the first tap would open
  // whichever link it just revealed. The first tap only reveals; links work after that.
  const onClickCapture = (e: MouseEvent) => {
    if (lastPointerType.current !== "touch" || openedByTap) return
    e.preventDefault()
    setOpenedByTap(true)
  }

  // Tapping anywhere else closes it again.
  useEffect(() => {
    if (!openedByTap) return
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpenedByTap(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [openedByTap])

  return (
    <span
      ref={ref}
      className={`${styles.location} ${openedByTap ? styles.open : ""}`}
      tabIndex={0}
      onPointerDown={(e) => { lastPointerType.current = e.pointerType }}
      onClickCapture={onClickCapture}
    >
      <span className={styles.city}>Vancouver, Canada</span>
      <span className={styles.territories}>
        <NationLink {...musqueam} />, <NationLink {...squamish} /> and <NationLink {...tsleilWaututh} />
      </span>
    </span>
  )
}

export default Location
