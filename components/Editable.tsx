import { ClipboardEvent, KeyboardEvent, useRef, useState } from "react"

interface EditableProps {
  lines: string[]
  onSave: (lines: string[]) => void
  // When true the text is directly editable; edits save when focus leaves it.
  enabled: boolean
  // Render as a bullet list, where Enter adds a bullet; otherwise a single paragraph.
  list?: boolean
  className?: string
  editableClassName: string
}

function readLines(el: HTMLElement, list: boolean) {
  const clean = (text: string) => text.replace(/\s+/g, " ").trim()
  if (!list) return [clean(el.innerText)].filter(Boolean)
  const items = Array.from(el.querySelectorAll("li")).map((li) => li.innerText)
  // Deleting every bullet can leave bare text without <li>s; fall back to lines.
  return (items.length ? items : el.innerText.split("\n")).map(clean).filter(Boolean)
}

// Text that is editable in place while `enabled`. Click away or ⌘/Ctrl+Enter saves.
function Editable({ lines, onSave, enabled, list = false, className = "", editableClassName }: EditableProps) {
  // Remount after each edit: the user changes the DOM directly, so React's copy must be rebuilt.
  const [version, setVersion] = useState(0)
  const ref = useRef<HTMLDivElement & HTMLUListElement>(null)

  const save = () => {
    const el = ref.current
    if (el) {
      const next = readLines(el, list)
      if (next.join("\n") !== lines.join("\n")) onSave(next)
    }
    setVersion((v) => v + 1)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey || !list)) {
      e.preventDefault()
      ref.current?.blur()
    }
  }

  // Paste as plain text so formatting from elsewhere doesn't come along.
  const onPaste = (e: ClipboardEvent) => {
    e.preventDefault()
    document.execCommand("insertText", false, e.clipboardData.getData("text/plain"))
  }

  const props = {
    ref,
    className: `${className} ${enabled ? editableClassName : ""}`,
    contentEditable: enabled,
    suppressContentEditableWarning: true,
    ...(enabled && { onBlur: save, onKeyDown, onPaste }),
  }

  return list ? (
    <ul key={version} {...props}>
      {lines.map((line, i) => <li key={i}>{line}</li>)}
    </ul>
  ) : (
    <div key={version} {...props}>{lines.join(" ")}</div>
  )
}

export default Editable
