import React, { useEffect, useState } from 'react'
import logo from '../assets/tectic-logo.png'
import downArrowLogo from '../assets/arrow-down.png'
import { motion, useMotionValue, useTransform } from 'framer-motion'



export const Hero7 = ({ className = "" }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const [mouseIsHovering, setMouseIsHovering] = useState(false);


    const xRange = [-window.innerWidth / 2, window.innerWidth / 2];
    const yRange = [-window.innerHeight / 2, window.innerHeight / 2];

    const xOffset = useTransform(x, xRange, [50, -50]);
    const yOffset = useTransform(y, yRange, [50, -50]);

    const handleMouseMove = (event) => {
        x.set(event.clientX - window.innerWidth / 2);
        y.set(event.clientY - window.innerHeight / 2);
    };

    const handleMouseEnter = () => {
        setMouseIsHovering(true);
    };

    const handleMouseLeave = () => {
        setMouseIsHovering(false);
    };

    useEffect(() => {
        if (!mouseIsHovering) {
            x.set(0);
            y.set(0);
        }
    }, [mouseIsHovering]);


    return (
        <div className={`h-full snap-div w-[80%] pt-28 mx-auto  ${className}`}>
            <div className='mt-5 gap-10 flex flex-col items-center'>
                <div className='w-[65%] flex items-start flex-col gap-16 text-white bg-transparent justify-center mx-auto'>

                    <div
                        className='w-full h-[15rem] overflow-hidden flex justify-center items-center  bg-[#ebc8a0] bg-transparent rounded-lg '
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <motion.img
                            src={logo}
                            style={{ x: xOffset, y: yOffset }} // Move the image based on the cursor position
                            drag // Enable drag functionality when hovered
                            dragConstraints={{ left: 0, top: 0, right: 300, bottom: 200 }} // Adjust constraints as needed
                            className='cursor-pointer object-fill'
                            alt="box background"
                        />
                    </div>

                    <p className=' text-[1.1rem] w-full text-center font-semibold text-gray-300' >
                        In this community, we welcome individuals who embody the spirit of resilience, ambition, and relentless determination. We seek those who are unafraid to challenge the status quo, who possess a hunger for continuous growth and learning.
                    </p>
                </div>

                <img 
                    src={downArrowLogo}
                    className='w-10 animate-up-down h-10 mt-20 cursor-pointer'
                    alt="down arrow"
                />
            </div>
        </div>
    )
}
