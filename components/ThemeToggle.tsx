import { useEffect, useState } from "react";
import { MoonFillIcon, BrightnessHighFillIcon } from "./Icons";

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

const ThemeIcon = ({ theme }: { theme: string }) => {
  switch (theme) {
    case Theme.Light:
      return <BrightnessHighFillIcon size={'20'} />
    case Theme.Dark:
      return <MoonFillIcon />
    default:
      return <BrightnessHighFillIcon />
  }
}

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem('theme')
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  return storedTheme ?? systemTheme
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>()

  useEffect(() => {
    setTheme(getPreferredTheme())
    // Follow the system only until the user picks a theme. Besides real changes, this
    // event fires around printing, which renders in light mode, and must not override a choice.
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light')
    }
    const matchMediaScheme = window.matchMedia('(prefers-color-scheme: dark)')
    matchMediaScheme.addEventListener('change', onSystemChange)

    return () => {
      matchMediaScheme.removeEventListener('change', onSystemChange)
    }
  }, [])

  useEffect(() => {
    if (theme) document.documentElement.dataset.bsTheme = theme
  }, [theme])

  const onClickToggler = () => {
    const next = theme == 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <button
      type="button"
      className="pointer-cursor"
      onClick={onClickToggler}
      aria-label={theme == 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      style={{ background: "none", border: 0, padding: 0, color: "inherit", lineHeight: 0 }}
    >
      <ThemeIcon theme={theme} />
    </button>
  )
}

export default ThemeToggle
