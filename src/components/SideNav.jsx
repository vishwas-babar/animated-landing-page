import React from 'react'

export const SideNav = ({ isSideNavOpen, toggleSideNav }) => {

    const navItems = [
        {
            title: "Section 1",
            href: "#"
        },
        {
            title: "Section 2",
            href: "#"
        },
        {
            title: "Section 3",
            href: "#"
        },
        {
            title: "Section 4",
            href: "#"
        },
        {
            title: "Section 5",
            href: "#"
        },
    ]

    return (
        <div className={` fixed inset-y-0 left-0 w-[60%] transition-all duration-500 ease-in-out z-30 bg-slate-950 ${isSideNavOpen ? "ml-0" : "-ml-[100%]"}`}>
            <div className='flex absolute top-1/2 left-72 -translate-y-1/2 flex-col'>
                <div className='flex flex-col w-[16rem]'>
                    {navItems.map((item, index) => (
                        <a key={index} href
                            className='block text-white text-3xl py-5 px-10 '
                        >
                            {item.title}
                        </a>
                    ))}
                </div>

                <div className='w-full h-[1px] bg-gray-700'></div>
            </div>
        </div>
    )
}

export function SideNavToggleIcon({ isSideNavOpen, toggleSideNav }) {
    return (
        <div
            onClick={toggleSideNav}
            className='absolute p-5 rounded-full flex flex-col z-40 cursor-pointer left-20 top-1/2 -translate-x-1/2'>
            <div className={`absolute transition-all duration-300 ease-in-out top-1/2 left-1/2  -translate-x-1/2 translate-y-1/2 bg-gray-300 w-6 h-[2px] ${isSideNavOpen ? "rotate-45" : "-translate-x-1/2 translate-y-1/2"}`}>

            </div>
            <div className={`absolute transition-all duration-300 ease-in-out top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-300 w-6 h-[2px] ${isSideNavOpen ? "-rotate-45" : "mt-2 -ml-2 "}`}>

            </div>

            {/* <a className="menu-icon ng-star-inserted"><svg width="30" height="30" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="hamburger"><rect id="topLine" x="5" width="25" height="2" fill="white"></rect><rect id="botLine" y="10" width="25" height="2" fill="white"></rect></svg></a> */}
        </div>
    )
}

