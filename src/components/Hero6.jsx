import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'

export const Hero6 = () => {

    const [centerIndex, setCenterIndex] = useState(4);

    const cards = [
        {
            id: 1,
            title: 'Ga*nd Mein Chul',
            description: 'This signifies a mindset of intense focus and determination, where individuals are willing to put in the hard work and effort required to achieve their goals, no matter what challenges they may face.',
        },
        {
            id: 2,
            title: 'Risk Hai toh ishq hai',
            description: "This heading encapsulates the idea that taking risks is an essential part of pursuing one's passions and dreams. It reflects a willingness to embrace uncertainty and step outside one's comfort zone in the pursuit of success and fulfillment.",
        },
        {
            id: 3,
            title: 'Jigraa',
            description: "This represents courage and resilience in the face of adversity. It signifies the strength of character needed to overcome obstacles and persevere in the pursuit of one's goals, even when the odds may seem daunting.",
        },
        {
            id: 4,
            title: 'Jugaadu',
            description: 'This reflects a spirit of resourcefulness and innovation, where individuals are adept at finding creative solutions to problems and making the most of limited resources. It emphasizes the importance of adaptability and ingenuity in achieving success.',
        },
        {
            id: 5,
            title: 'Zidi',
            description: "This signifies a stubborn determination and unwavering commitment to one's goals. It reflects a refusal to back down in the face of challenges and a steadfast resolve to keep pushing forward, no matter what obstacles may arise.",
        },
        {
            id: 6,
            title: 'Dil Maange more',
            description: "This heading represents a mindset of ambition and aspiration, where individuals are driven by a relentless desire to achieve more and strive for greater heights of success and fulfillment. It reflects a refusal to settle for mediocrity and a determination to chase after one's dreams with passion and purpose ",
        },

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
        <div className='w-[75%] mx-auto snap-div h-full flex flex-col gap-10 items-start  justify-center '>

            <h1 className=' text-gray-300 text-4xl'>Core Values we believe in</h1>

            <div className='w-full mt-10 flex flex-row gap-5 items-center justify-center h-fit'>

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
                        <div className={`w-72 h-fit text-start bg-gray-800 rounded-lg p-4 m-4 transition-all duration-300 ease-in-out `}>
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
        </div>
    )
}
