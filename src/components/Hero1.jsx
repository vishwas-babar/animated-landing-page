import React, { useEffect, useState } from 'react'
import boxBg from '../assets/company-bg.png'
import bg from '../assets/12.png'
import { motion, spring, useMotionValue, useTransform } from 'framer-motion'



const Hero1 = ({ className="" }) => {

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
            <div className='mt-20 gap-10 flex'>
                <div className=' flex items-start flex-col gap-16 text-white justify-center w-full'>
                    <h1 className=' text-[3rem] '>
                        <span className='text-[#ebc8a0]'>Venq Group</span> - dolor sit amet consectetur adipisicing lotem elit.
                    </h1>

                    <span className='text-sm w-2/3 text-gray-300' >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat expedita nesciunt voluptatum eius laborum ex, quasi reiciendis sint similique autem.
                    </span>
                </div>


                <div
                    className=' w-full py-4 flex justify-center items-center bg-[#ebc8a0] rounded-lg shadow-lg'
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <motion.img
                        src={bg}
                        style={{ x: xOffset, y: yOffset }} // Move the image based on the cursor position
                        drag // Enable drag functionality when hovered
                        dragConstraints={{ left: 0, top: 0, right: 300, bottom: 200 }} // Adjust constraints as needed
                        className='cursor-pointer w-60 h-auto'
                        alt="box background"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero1