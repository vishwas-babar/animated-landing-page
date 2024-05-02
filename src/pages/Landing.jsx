import React, { useState } from 'react'
import { Card, Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, TopNav, SideNavToggleIcon, SideNav, Overlay } from '../components/index'




function Landing() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    function toggleSideNav() {
        setIsSideNavOpen(prev => !prev)
    }

    return (
        <>
            <TopNav />
            <div className='y w-full h-screen bg-gray-900 container'>
                <div className='mandatory-scroll-snapping'>
                    <SideNav isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
                    <Overlay isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
                    <Hero6 />
                    <Hero1 />
                    <Hero2 />
                    <Hero3 />
                    <Hero4 />
                    <Hero5 />
                    <SideNavToggleIcon isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
                </div>
            </div>
        </>
    )
}

export default Landing