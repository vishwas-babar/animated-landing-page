import React from 'react'

export const Overlay = ({ isSideNavOpen, toggleSideNav }) => {
  return (
      <div
            onClick={toggleSideNav}
          className={`absolute inset-0 z-[25] backdrop-blur-md ${isSideNavOpen ? "flex" : "hidden"}`}>
    </div>
  )
}