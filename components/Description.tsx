import React, { useState } from "react"

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

export default Description