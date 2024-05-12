import React, { useState } from 'react'
import { Card, Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, TopNav, SideNavToggleIcon, SideNav, Overlay } from '../components/index'
import { Hero7 } from '../components/Hero7';




function Landing() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    function toggleSideNav() {
        setIsSideNavOpen(prev => !prev)
    }

    return (
        <>
            <TopNav />
            <div className='y w-full h-screen bg-[#171612] container'>
                <div className='mandatory-scroll-snapping'>
                    <SideNav isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
                    <Overlay isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
                    <Hero7 />
                    <Hero4 />
                    <Hero2 />
                    <Hero5 />
                    <Hero6 />
                    {/* <Hero1 /> */}
                    {/* <Hero3 /> */}
                    <SideNavToggleIcon isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
                </div>
            </div>
        </>
    )
}

export default Landing