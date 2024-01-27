"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

<style jsx>{`
  .border-gradient {
    background: linear-gradient(45deg, #f06, #9f6);
    /* Adjust the gradient angle and colors as per your requirement */
  }
`}</style>;

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale:0.4 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Abhishek Kumar",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Competitive Programmer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am Abhishek Kumar, a Competitive Programmer, a Full Stack Web
            Developer and a mobile developer. I am interested in developing new
            projects and solve coding problems.
          </p>
          <div>
            {/* <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white"
            >
            <Link href="#contact" >
              Hire Me
              </Link>
            </motion.button> */}

            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="px-1 py-1 rounded-full w-full sm:w-fit  bg-gradient-to-br from-blue-500 to-purple-500  hover:bg-slate-800 text-white  mt-3"
            >
            <Link
                  href="https://firebasestorage.googleapis.com/v0/b/port-1707b.appspot.com/o/Software_Engineer_Resume__5_%20(3).pdf?alt=media&token=9a375a80-3de0-40b2-af1b-49367583a90d"
                  target="_black"
                >
              <span className="block bg-[#121212] hover-bg-slate-800 rounded-full px-5 py-2">
                {" "}
                
                  Download CV
               
              </span>
              </Link>
            </motion.button>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <motion.div 
          initial={{ opacity: 0, scale:0.4 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.5 }} className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/abhishek3.jpg"
              className="rounded-full border-4 border-cyan-500 relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="hero image"
              width={400}
              height={400}
              // layout="responsive"
              // objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
