import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'


enum NavIdx {
  HOME,
  RESUME,
  ABOUT,
}

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(-1)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === "/resume") {
      setActiveIdx(NavIdx.RESUME)
    }
    if (router.pathname === "/about") {
      setActiveIdx(NavIdx.ABOUT)
    }
  }, [])

  const active = (idx) => {
    return activeIdx === idx ? "active" : ""
  }

  return (
    <nav className="nav p-2 mx-4 align-items-center justify-content-between d-print-none">
      <Link
        onClick={() => setActiveIdx(NavIdx.HOME)}
        className={`nv-nav-link fs-3 ${active(NavIdx.HOME)}`}
        href="/"
      >
        Daniel Vasquez
      </Link>
      <div className="d-flex align-items-center">
        <Link
          onClick={() => setActiveIdx(NavIdx.RESUME)}
          className={`nv-nav-link ms-3  fs-5 ${active(NavIdx.RESUME)}`}
          href="/resume"
        >
          Resume
        </Link>
        <Link
          onClick={() => setActiveIdx(NavIdx.ABOUT)}
          className={`nv-nav-link ms-3  fs-5 ${active(NavIdx.ABOUT)}`}
          href="/about"
        >
          About
        </Link>
      </div>
    </nav >
  )
}

export default Navbar