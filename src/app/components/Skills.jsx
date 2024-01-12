"use client"
import { motion } from 'framer-motion'
import React from 'react'
import SkillButton from './SkillButton'
// import { motion } from "framer-motion";

const Skill =[
    { title : "C++"},
    { title : "C"},
    { title : "Python"},
    { title : "Java"},
    { title : "HTML"},
    { title : "CSS"},
    { title : "JavaScript"},
    { title : "ReactJS"},
    { title : "NodeJS"},
    { title : "ExpressJS"},
    { title : "MongoDB"},
    { title : "NextJS"},
    { title : "Firebase"},
    { title : "Kotlin"},
    
    

]


const Skills = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold  mt-4 mb-8 md:mb-12 bg-gradient-to-br from-purple-500 to-cyan-500 p-2">
        Skills
      </h1>
      <div className='grid md:grid-cols-7 gap-3 md:gap-8 items-center justify-center'>
      {/* {Skill.map((link, title))=>(<SkillButton title={link.title}/>)
      } */}
      {
        Skill.map(({title}) => (
            <SkillButton title={title}/>
        ))
      }
      </div>
      <br />
      <br />
    </div>
  )
}

export default Skills
