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

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>()


  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    return storedTheme ?? systemTheme
  }

  const useSetTheme = (e) => { setTheme(e.matches ? 'dark' : 'light') }
  useEffect(() => {
    const htmlElement = document.querySelectorAll('[data-bs-theme]')[0] as HTMLElement;
    htmlElement.dataset.bsTheme = (theme ?? getPreferredTheme())
    localStorage.setItem('theme', (theme ?? getPreferredTheme()))
    setTheme(theme ?? getPreferredTheme())
    const matchMediaScheme = window.matchMedia('(prefers-color-scheme: dark)')
    matchMediaScheme.addEventListener('change', useSetTheme)

    return () => {
      matchMediaScheme.removeEventListener('change', useSetTheme)
    }
  }, [theme])

  const onClickToggler = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="pointer-cursor" onClick={onClickToggler}>
      <ThemeIcon theme={theme} />
    </div>
  )
}

export default ThemeToggle
