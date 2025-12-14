import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
