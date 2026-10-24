import React from 'react'
import { ArrowDown } from 'lucide-react'
import { skills } from '../../data'
import { Reveal, SectionLabel } from '../shared'

const About: React.FC = () => {
  return (
    <section className="about-section section-space" id="about" data-nav-section aria-labelledby="about-title">
      <div className="container">
        <Reveal><SectionLabel number="02">BEYOND THE CODE</SectionLabel></Reveal>
        <div className="about-main">
          <Reveal className="about-heading">
            <h2 className="section-title" id="about-title">A curious mind.<br />A builder at heart<span className="green-period">.</span></h2>
            <a href="#experience" className="text-link">A little more about my journey <ArrowDown aria-hidden="true" size={16} /></a>
          </Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p>I'm Thando, an IT student and developer from Lilongwe, Malawi. I care about technology that does something useful, not just something impressive.</p>
            <p>My work sits at the intersection of full-stack development, data analysis, and cybersecurity. I've cleaned and analysed over 66,000 records in Python and SQL, built a network intrusion detection system, and helped local farmers manage their flocks through a pilot web platform.</p>
            <p>Currently studying Computing with Business Management at NACIT, and always making room for the next good challenge.</p>
          </Reveal>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} className="skill-column" delay={index * 0.06}>
              <div className="skill-heading"><span className="mono">0{index + 1}</span><h3>{skill.title}</h3></div>
              <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
