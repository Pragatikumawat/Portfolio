import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h2 className="logo">My Portfolio</h2>
        <nav>
          <a href="#profile">Profile</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
