import React from 'react'

const skillList = ['TypeScript', 'React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Git', 'GitHub', 'Vite',
     'Jest', 'Cypress', 
     'Postman', 'Mantis Bug Tracker', 'Active collab', 'Microsoft excel', 'Google sheet excel', 'Selenium', 'Appium', 'Appium inspector', 'Vysor.']

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          {skillList.map((s) => (
            <div className="skill" key={s}>{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
