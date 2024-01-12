"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Link from 'next/link'
Link

const TAB_DATA = [
    {
        title:"Codeforces",
        id:"codeforces",
        content:(
            <ul className='list-disc pl-2'>
              <li><Link href="https://codeforces.com/profile/abhishekkumar20" target='_blank'>AbhishekKumar20</Link></li>
              <li><Link href="https://codeforces.com/profile/ayanokoji_." target='_blank'>Ayanokoji_.</Link></li>
              <li><Link href="https://codeforces.com/profile/_akaza_" target='_blank'>Akaza</Link></li>
                
            </ul>
        )
    },
    {
        title:"Codechef",
        id:"codechef",
        content:(
            <ul className='list-disc pl-2'>
                <li><Link href="https://www.codechef.com/users/abhikumar_2025" target='_blank'>AbhiKumar_2025</Link></li>
                <li><Link href="https://www.codechef.com/users/ayanokoji4" target='_blank'>Ayanokoji4</Link></li>
                <li><Link href="https://www.codechef.com/users/akaza7" target='_blank'>Akaza7</Link></li>
            </ul>
        )
    },
    {
        title:"Leetcode",
        id:"leetcode",
        content:(
            <ul className='list-disc pl-2'>
                <li><Link href="https://leetcode.com/abhikumar_2025/" target='_blank'>AbhiKumar_2025</Link></li>
            </ul>
        )
    },
    {
        title:"Atcoder",
        id:"atcoder",
        content:(
            <ul className='list-disc pl-2'>
                <li><Link href="https://atcoder.jp/users/AbhishekKumar20" target='_blank'>AbhishekKumar20</Link></li>
            </ul>
        )
    },
    {
        title:"Github",
        id:"github",
        content:(
            <ul className='list-disc pl-2'>
                <li><Link href="https://github.com/AbhishekKumar2002" target='_blank'>AbhishekKumar2002</Link></li>
            </ul>
        )
    },
    {
        title:"LinkedIn",
        id:"linkedIn",
        content:(
            <ul className='list-disc pl-2'>
                <li><Link href="https://www.linkedin.com/in/abhishek-kumar-202362229/" target='_blank'>Abhishek Kumar</Link></li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("codeforces")
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
                <div className='flex overflow-x-auto flex-row  mt-8'>
                <TabButton selecttab={()=>handletabChange("codeforces")} active = {tab==="codeforces"}>
                    {" "}
                    Codeforces{" "}
                </TabButton>
                <TabButton selecttab={()=>handletabChange("codechef")} active = {tab==="codechef"}>
                    {" "}
                    Codechef{" "}
                </TabButton>
                <TabButton selecttab={()=>handletabChange("leetcode")} active = {tab==="leetcode"}>
                    {" "}
                    Leetcode{" "}
                </TabButton>
                <TabButton selecttab={()=>handletabChange("atcoder")} active = {tab==="atcoder"}>
                    {" "}
                    Atcoder{" "}
                </TabButton>
                <TabButton selecttab={()=>handletabChange("github")} active = {tab==="github"}>
                    {" "}
                    Github{" "}
                </TabButton>
                <TabButton selecttab={()=>handletabChange("linkedIn")} active = {tab==="linkedIn"}>
                    {" "}
                    LinkedIn{" "}
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
