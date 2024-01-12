import React from 'react'

const TabButton = ({ active, selecttab, children }) => {
    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE] border-b border-purple-500'
  return (
    <button onClick={selecttab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  )
}

export default TabButton
