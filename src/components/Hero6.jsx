import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'

export const Hero6 = () => {

    const [centerIndex, setCenterIndex] = useState(4);

    const cards = [
        {
            id: 1,
            title: 'this is title one',
            description: 'this is description one, asdklf kasfj a;lsfdfjio adsk;ka dub asdf adfh kjajsdfn jfhiew',
        },
        {
            id: 2,
            title: 'this is title two',
            description: 'this is description two, asdklf kasfj a;lsfdfjio adsk;ka dub asdf adfh kjajsdfn jfhiew',
        },
        {
            id: 3,
            title: 'this is title three',
            description: 'this is description three, asdklf kasfj a;lsfdfjio adsk;ka dub asdf adfh kjajsdfn jfhiew',
        },
        {
            id: 4,
            title: 'this is title four',
            description: 'this is description four, asdklf kasfj a;lsfdfjio adsk;ka dub asdf adfh kjajsdfn jfhiew',
        },
        {
            id: 5,
            title: 'this is title five',
            description: 'this is description five, asdklf kasfj a;lsfdfjio adsk;ka dub asdf adfh kjajsdfn jfhiew',
        },
        {
            id: 6,
            title: 'this is title six',
            description: 'this is description six, asdklf kasfj a;lsfdfjio adsk;ka dub asdf adfh kjajsdfn jfhiew',
        },
        {
            id: 7,
            title: 'this is title seven',
            description: 'this is description seven, asdklf kasfj a;lsfdfjio adsk;ka dub asdf adfh kjajsdfn jfhiew',
        },
        {
            id: 8,
            title: 'this is title eight',
            description: 'this is description eight, asdklf kasfj a;lsfdfjio adsk;ka dub asdf adfh kjajsdfn jfhiew',
        },
        {
            id: 9,
            title: 'this is title nine',
            description: 'this is description nine, asdklf kasfj a;lsfdfjio adsk;ka dub asdf adfh kjajsdfn jfhiew',
        }
    ]
    
    const angle = 360 / cards.length;
    const [circleRotationAngle, setCircleRotationAngle] = useState(angle * centerIndex);
    
    function handleNext() {
        setCenterIndex(prev => {
            if (prev < cards.length - 1)
                return prev + 1
            else return prev
        })
        rotateCircleForword();
    }

    function handlePrev() {
        setCenterIndex(prev => {
            if (prev > 0)
                return prev - 1
            else return prev
        })
        rotateCircleBackword();
    }

    function giveClassToDot(index, centerIndex) {

        const centerDotStyle = "animate-circle-animation -right-2 outline outline-1 outline-white outline-offset-1"
        const sideDotStyle = "opacity-50"
        const defaultDotStyle = "opacity-0"

        if (index === centerIndex) {
            return centerDotStyle
        } else if (index === centerIndex + 1 || index === centerIndex - 1) {
            return sideDotStyle
        } else {
            return defaultDotStyle
        }
    }

    function rotateCircleForword() {
        if (circleRotationAngle >= 360) {
            return
        }
        return setCircleRotationAngle(prev => prev + angle < 360 ? prev + angle : prev)
    }

    function rotateCircleBackword() {
        if (circleRotationAngle <= 0) {
            return
        }
        return setCircleRotationAngle(prev => prev - angle)
    }

    return (
        <div className='w-full flex gap-5 items-center justify-center h-full snap-div'>
            
            <div className={`w-fit h-fit transition-all duration-300 ease-in-out relative flex items-center justify-center rounded-full transform border -rotate-[${circleRotationAngle}deg]`}>
                <section className={`stage transition-all duration-300 relative rounded-full rotate-[${circleRotationAngle}deg]`}>
                    <figure className="ball transform"><span className="shadow"></span></figure>
                </section>

                {cards.map((_, i) => (
                    <div
                        key={i}
                        // className={`absolute text-white w-2 h-2 rounded-full bg-[#ebc8a0] ${centerIndex === i ? "bg-red-500" : "bg-[#ebc8a0]"}`}
                        className={`absolute transition-all duration-300 ease-in-out text-white w-2 h-2 rounded-full bg-[#ebc8a0] ${giveClassToDot(i, centerIndex)}`}
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) rotate(${i * (360 / cards.length)}deg) translateX(150px)`
                        }}
                    ></div>
                ))}
            </div>


            <div>

                <motion.div
                    key={cards[centerIndex].id}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0, rotate: 0, borderRadius: '0%', boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5)' }}
                    initial={{ opacity: 0, scale: 0.5, y: 100, x: 100, rotate: 45, borderRadius: '50%', }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={`w-72 h-40 text-start bg-gray-800 rounded-lg p-4 m-4 transition-all duration-300 ease-in-out `}>
                        <h1 className='text-2xl  text-gray-300 font-bold'>{cards[centerIndex].title}</h1>
                        <p className='text-sm text-gray-400 mt-6'>{cards[centerIndex].description}</p>
                    </div>
                </motion.div>

            </div>

            <div className='flex flex-col'>
                <PrevArrow className='rotate-90' onClick={handlePrev} />
                <NextArrow className='rotate-90' onClick={handleNext} />
            </div>
        </div>
    )
}
