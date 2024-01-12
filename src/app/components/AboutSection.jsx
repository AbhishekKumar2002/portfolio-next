"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Kotlin</li>
              <li>NodeJS</li>
              <li>NextJS</li>
              <li>ReactJS</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>  
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Indian Institute of Information Technology, Lucknow</li>
                <li>
                    Holy Angel Public School, Almora, Uttarakhand
                </li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handletabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/images1.jpg" width={600} height={800} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                I am Abhishek Kumar, a Competitive Programmer, a Full Stack Web Developer and a mobile developer. I am interested in developing new projects and solve coding problems. I am Pupil at Codeforces, 3⭐ coder at codechef, 
                Full Stack Developer.
                <br />I am expert in C++, Python, HTML, CSS, Javascript, ReactJS, NodeJS, NextJS, MongoDB, ExpressJS, etc.
                </p>
                <div className='flex flex-row mt-8 justify-start'>
                <TabButton selecttab={()=>handletabChange("skills")} active = {tab==="skills"}>
                    {" "}
                    Skills{" "}
                </TabButton>
                <TabButton selecttab={()=>handletabChange("education")} active = {tab==="education"}>
                    {" "}
                    Education{" "}
                </TabButton>

                    {/* <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Skills</span>
                    <span>Education</span>
                    <span></span> */}
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t)=>t.id===tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
