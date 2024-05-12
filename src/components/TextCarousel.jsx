import React, { useState } from 'react'
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import blackBg from '../assets/black-bg.jpg'

const TextCarousel = () => {

    const [contents, setContents] = useState([
        {
            id: 1,
            title: "Creative Atmosphere",
            description: " Surround yourself with creativity and innovation, nurturing your ideas to fruition."
        },

        {
            id: 2,
            title: "Personal Guidance",
            description: "Receive personalized mentorship from industry leaders, guiding you towards success."
        },

        {
            id: 3,
            title: "Global Connections",
            description: "Expand your network globally, fostering collaborations and partnerships worldwide."
        },

        {
            id: 4,
            title: "Cutting-Edge Tools",
            description: "Access state-of-the-art resources to stay ahead of industry trends and technologies."
        },

        {
            id: 5,
            title: "Career Boost",
            description: "Propel your career with tailored development opportunities and job placement support."
        },

        {
            id: 6,
            title: "Community Backing",
            description: "Join a supportive community, where members uplift and encourage each other's growth and achievements."
        },
        {
            id: 7,
            title: "Networking Events",
            description: "Attend exclusive networking events and workshops designed to facilitate meaningful connections and collaborations."
        }

    ])

    const [current, setCurrent] = useState(Math.floor(contents.length / 2));

    const centerElementClass = " z-20 opacity-1 scale-1"
    const leftElementClass = "absolute opacity-30 scale-90 -translate-x-80"
    const rightElementClass = "absolute opacity-30 scale-90 translate-x-80"
    const defaultElementClass = "absolute scale-75 opacity-0  "


    const getTheClassName = (index) => {
        if (index === current) {
            return centerElementClass
        }
        else if (index === current - 1 || index === current + 1) {
            return index === current - 1 ? leftElementClass : rightElementClass
        }
        return defaultElementClass
    }

    const handleNext = () => {
        if (current === contents.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    const handlePrev = () => {
        if (current === 0) {
            setCurrent(contents.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }


    return (
        <div className='relative flex items-center justify-center w-[40rem] h-[20rem]'>
            <PrevArrow className='absolute top-1/2 -translate-y-1/2 z-20 -left-52' onClick={handlePrev} />
            <div className='h-80  relative flex items-center justify-center gap-10 w-80rem'>
                {contents.map((content, index) => (
                    <div key={content.id} className={`transition-all duration-500 ease-in-out p-4 w-72 h-52rounded-md ${getTheClassName(index)} `}>
                        <h1 className='text-3xl text-white'>{content.title}</h1>
                        <p className='text-white mt-7'>{content.description}</p>
                    </div>
                ))}

                <div
                    className='absolute w-72 h-48 rounded-md flex overflow-hidden bg-black z-10 opacity-50'
                    >
                        <img  src={blackBg} className=' object-fill' />
                </div>
            </div>
            <NextArrow className='absolute z-20 top-1/2 -translate-y-1/2 -right-52' onClick={handleNext} />
        </div>
    )
}

export default TextCarousel