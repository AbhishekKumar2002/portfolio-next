"use client"
import { motion } from 'framer-motion'
import React from 'react'




const SkillButton = ({title}) => {
  return (
    <div>
      <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="px-1 py-1 rounded-full w-full sm:w-fit  bg-gradient-to-br from-blue-500 to-purple-500  hover:bg-slate-800 text-white  mt-3"
            >
              <span className="block items-center justify-center bg-[#121212] hover-bg-slate-800 rounded-full px-5 py-2">
                {title}
                
              </span>
            </motion.button>
    </div>
  )
}

export default SkillButton
