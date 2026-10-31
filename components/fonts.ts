import localFont from "next/font/local"

// Static Source Code Pro (Adobe release 2.042R), self-hosted instead of Google's
// variable font: Chrome embeds static TrueType fonts in printed PDFs properly,
// while variable fonts end up as Type 3 fonts that some resume parsers mishandle.
export const sourceCodePro = localFont({
  src: [
    { path: "../styles/fonts/source-code-pro/SourceCodePro-Regular.ttf.woff2", weight: "400", style: "normal" },
    { path: "../styles/fonts/source-code-pro/SourceCodePro-Bold.ttf.woff2", weight: "700", style: "normal" },
  ],
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
})
