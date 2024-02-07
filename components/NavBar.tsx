import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import ThemeToggler from "./ThemeToggle"


enum NavIdx {
  HOME,
  WORK,
  RESUME,
  ABOUT,
}

const ListIcon = ({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="bi bi-list" viewBox={`0 0 ${size * 0.5} ${size * 0.5}`}>
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </svg>
  )
}

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(-1)
  const [activeTitle, setActiveTitle] = useState("")
  const [toggle, setToggle] = useState(false)
  const router = useRouter()

  const onClickToggle = () => {
    if (!toggle) {
      setActiveTitle("")
    }
    setToggle(!toggle)
  }

  useEffect(() => {
    setToggle(false)
    setActiveTitle("")
    if (router.pathname === "/work") {
      setActiveIdx(NavIdx.WORK)
      setActiveTitle("Work")
    }
    if (router.pathname === "/resume") {
      setActiveIdx(NavIdx.RESUME)
      setActiveTitle("Resume")
    }
    if (router.pathname === "/about") {
      setActiveIdx(NavIdx.ABOUT)
      setActiveTitle("About")
    }
  }, [router.pathname])

  const active = (idx) => {
    return activeIdx === idx ? "active" : ""
  }

  return (
    <nav className={`d-flex flex-nowrap navbar ${toggle ? "nv-blur-bg" : null} justify-content-between navbar-expand-sm p-3 d-print-none`}>
      <Link
        onClick={() => setActiveIdx(NavIdx.HOME)}
        className={`nv-nav-link align-self-baseline fs-3 ${active(NavIdx.HOME)}`}
        href="/"
      >
        Daniel Vasquez
      </Link>
      <div className="ms-auto">

        <button
          type="button"
          onClick={onClickToggle}
          className="btn navbar-toggler navbar-rounded-0 border-0 p-0 m-0"
        >

          {!toggle && <span className={`me-2 p-1 text-light ${!!activeTitle?.length ? "border border-1 border-light" : null}`}>{activeTitle}</span>}
          <span className={toggle ? "text-light ms-5" : "p-0 m-0 "}>
            <ListIcon size="32" />
          </span>
        </button>
        <div className={`collapse ${toggle && "show"} navbar-collapse justify-content-end`}>
          <div className="d-sm-flex gap-3 mt-1 text-end ">
            <ThemeToggler />
            <Link
              onClick={() => setActiveIdx(NavIdx.WORK)}
              className={`nv-nav-link fs-5 ${active(NavIdx.WORK)}`}
              href="/work"
            >
              Work
            </Link>
            <Link
              hidden={true}
              onClick={() => setActiveIdx(NavIdx.RESUME)}
              className={`nv-nav-link fs-5 ${active(NavIdx.RESUME)}`}
              href="/resume"
            >
              Resume
            </Link>
            <Link
              onClick={() => setActiveIdx(NavIdx.ABOUT)}
              className={`nv-nav-link fs-5 ${active(NavIdx.ABOUT)}`}
              href="/about"
            >
              About
            </Link>
          </div>
        </div>


      </div>
    </nav>
  )
}

export default Navbar