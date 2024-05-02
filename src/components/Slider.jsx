import React, { useState } from "react";
import png from "../assets/12.png";
import NextArrow from "./NextArrow";
import { motion } from "framer-motion";
import PrevArrow from "./PrevArrow";
import Card from "./Card";

function Slider() {

    const [centerImg, setCenterImg] = useState(2)

    const cards = [
        {
            element: <Card />,
            id: 1
        },
        {
            element: <Card />,
            id: 2
        },
        {
            element: <Card />,
            id: 3
        },
        {
            element: <Card />,
            id: 4
        },
        {
            element: <Card />,
            id: 5
        },
        {
            element: <Card />,
            id: 6
        },
        {
            element: <Card />,
            id: 7
        },
        {
            element: <Card />,
            id: 8
        },
    ]

    const cetnerClass = {
        outerDiv: "absolute mb-40 ",
        innerdiv: `absolute z-20 w-80  z-20 opacity-1  mt-4 transition-all duration-500 ease-in-out scale-150 mb-40`,
        img: `w-28 h-auto`
    }

    const leftClass = {
        outerDiv: "absolute mr-80 ",
        innerdiv: `opacity-1 absolute mr-[33rem] scale-75 mt-20 mr-20 transition-all duration-500 ease-in-out`,
        img: `w-28 h-auto`
    }

    const rightClass = {
        outerDiv: "absolute ml-80",
        innerdiv: `opacity-1 absolute ml-[33rem] scale-75 mt-20 ml-20 transition-all duration-500 ease-in-out`,
        img: `w-28 h-auto`
    }

    const defaultClass = {
        outerDiv: "absolute ",
        innerdiv: `scale-75 opacity-0  transition-all duration-500 ease-in-out`,
        img: `w-28 h-auto`
    }

    const giveClassNameToImg = (index) => {
        if (index == centerImg) {
            return cetnerClass;
        } else if (index == centerImg - 1) {
            return leftClass;
        } else if (index == centerImg + 1) {
            return rightClass;
        } else {
            return defaultClass;
        }
    }


    const handleNext = () => {
        if (centerImg === cards.length - 1) {
            setCenterImg(0);
        } else {
            setCenterImg(centerImg + 1);
        }
    }

    const handlePrev = () => {
        if (centerImg === 0) {
            setCenterImg(items.length - 1);
        } else {
            setCenterImg(centerImg - 1);
        }
    }

    return (
        <div className="relative w-2/3 flex items-center justify-between">
            <PrevArrow className="absolute -left-20" onClick={handlePrev} />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex w-full mt-20  justify-around relative h-96 rounded-md bg-transperent shadow" >
                {cards.map((card, index) => {
                    return (

                        <Card key={card.id} className={giveClassNameToImg(index).innerdiv} />

                        // <>
                        //     {() => getTheCard(index)}
                        // </>
                    )
                })}
            </motion.div>
            <NextArrow className="absolute -right-20" onClick={handleNext} />
        </div>
    )
}

export default Slider;