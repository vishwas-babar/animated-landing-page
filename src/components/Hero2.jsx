import React, { useState } from 'react'
import hero2Video from '../assets/hero2video.mp4'
import hero2Img from '../assets/4.png'
import { motion } from 'framer-motion'
import uniqid from 'uniqid';
import { useInView } from 'react-intersection-observer';



const Hero2 = ({ className = "" }) => {

    const [selectedItem, setSelectedItem] = useState(0);
    const [ref, inView] = useInView()

    const variants = {
        hidden: { opacity: 0, y: 100, transition: { duration: 0.5 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }


    const items = [
        {
            clickText: 'option 1',
            heading: 'Lorem ipsum dolor sit amet.',
            content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia esse soluta nostrum quia neque  saepe atque quia! Totam et quaerat distinctio aliquid deleniti rem quisquam facilis nesciunt?'
        },
        {
            clickText: 'option 2',
            heading: 'Lorem ipsum dolor sit amet.',
            content: 'sadlfjk asldfj  asdfjl or sit amet asdf;l adf elit. A mollitia esse soluta nostrum quia dfg  asdf atque dsg! Totam et a a aliquid deleniti rem quisquam facilis nesciunt?'
        },
        {
            clickText: 'option 3',
            heading: 'Lorem ipsum dolor sit amet.',
            content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia esse soluta nostrum quia neque  saepe atque quia! Totam et quaerat distinctio aliquid deleniti rem quisquam facilis nesciunt?'
        },
        {
            clickText: 'option 4',
            heading: 'Lorem ipsum dolor sit amet.',
            content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia esse soluta nostrum quia neque  saepe atque quia! Totam et quaerat distinctio aliquid deleniti rem quisquam facilis nesciunt?'
        },
        {
            clickText: 'option 5',
            heading: 'Lorem ipsum dolor sit amet.',
            content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia esse soluta nostrum quia neque  saepe atque quia! Totam et quaerat distinctio aliquid deleniti rem quisquam facilis nesciunt?'
        },
        {
            clickText: 'option 6',
            heading: 'Lorem ipsum dolor sit amet.',
            content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia esse soluta nostrum quia neque  saepe atque quia! Totam et quaerat distinctio aliquid deleniti rem quisquam facilis nesciunt?'
        },
        {
            clickText: 'option 7',
            heading: 'Lorem ipsum dolor sit amet.',
            content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia esse soluta nostrum quia neque  saepe atque quia! Totam et quaerat distinctio aliquid deleniti rem quisquam facilis nesciunt?'
        }
    ]


    return (
        <div className={` snap-div ${className}`}>
            <div className='h-full px-10 w-full flex flex-col items-center justify-start bg-gray-900 mt-28'>
                <div className='w-full '>

                    <motion.h1
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        className=' text-gray-300 -ml-80 text-4xl'>
                        Lorem, ipsum dolor.
                    </motion.h1>
                </div>

                <div className='mt-10 flex'>
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        className='w-full flex items-center justify-center mt-5 '>
                        <img src={hero2Img} className=' w-80 h-auto ' alt="" />
                    </motion.div>

                    <div className='flex w-full flex-col'>

                        <TextCard item={items[selectedItem]} />

                        <div className='relative h-fit text-gray-500 font-semibold w-fit mt-28 ml-40 rounded-full'>

                            <div className='relative p-[2PX] h-fit w-fit rounded-full overflow-hidden'>

                                <div
                                    className={`absolute z-10 inset-0 h-full w-full rounded-full bg-[conic-gradient(#EBC8A0_20deg,transparent_360deg)] ${inView ? 'animate-rotate' : ''}`}
                                ></div>

                                <div
                                    ref={ref}
                                    className='h-28 relative bg-gray-900 z-50 text-gray-400 font-semibold rounded-full overflow-visible w-[40rem] '
                                >

                                </div>


                            </div>

                            <div className='absolute w-full flex justify-between px-10 -top-10'>

                                <div className='w-20 h-10 relative '>
                                    <div
                                        className={` absolute  text-md text-gray-400 transition-all duration-500 ease-in-out cursor-pointer ${selectedItem === 0 ? "" : ""}`}
                                        onClick={() => setSelectedItem(0)}
                                    >
                                        {items[0].clickText}
                                        <div className={` h-[2px] transition-all ease-in-out duration-500 bg-[#EBC8A0] ${selectedItem === 0 ? "w-20" : "w-0"}`}></div>
                                    </div>
                                </div>
                                <div className='w-20 h-10 relative '>
                                    <div
                                        className={` absolute  text-md text-gray-400 transition-all duration-500 ease-in-out cursor-pointer ${selectedItem === 1 ? "" : ""}`}
                                        onClick={() => setSelectedItem(1)}
                                    >
                                        {items[1].clickText}
                                        <div className={` h-[2px] transition-all ease-in-out duration-500 bg-[#EBC8A0] ${selectedItem === 1 ? "w-20" : "w-0"}`}></div>
                                    </div>
                                </div>
                                <div className='w-20 h-10 relative '>
                                    <div
                                        className={` absolute  text-md text-gray-400 transition-all duration-500 ease-in-out cursor-pointer ${selectedItem === 2 ? "" : ""}`}
                                        onClick={() => setSelectedItem(2)}
                                    >
                                        {items[2].clickText}
                                        <div className={` h-[2px] transition-all ease-in-out duration-500 bg-[#EBC8A0] ${selectedItem === 2 ? "w-20" : "w-0"}`}></div>
                                    </div>
                                </div>
                                <div className='w-20 h-10 relative '>
                                    <div
                                        className={` absolute  text-md text-gray-400 transition-all duration-500 ease-in-out cursor-pointer ${selectedItem === 3 ? "" : ""}`}
                                        onClick={() => setSelectedItem(3)}
                                    >
                                        {items[3].clickText}
                                        <div className={` h-[2px] transition-all ease-in-out duration-500 bg-[#EBC8A0] ${selectedItem === 3 ? "w-20" : "w-0"}`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function TextCard({ item }) {

    const variants = {
        hidden: { opacity: 0, y: 100, transition: { duration: 0.5 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <motion.div
            key={uniqid()}
            variants={variants}
            initial='hidden'
            whileInView='visible'
            className='w-[20rem] h-[15rem] ml-48 text-white '
        >
            <h2 className=' text-gray-300 text-start text-2xl'>
                {item.heading}
            </h2>

            <p className=' mt-10 text-start text-gray-400'>
                {item.content}
            </p>
        </motion.div>
    )
}

export default Hero2