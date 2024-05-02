import { useState } from "react";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { motion } from "framer-motion";
import img from "../assets/2.jpg"


export default function Hero4() {

    const [sideDivCover, setSideDivCover] = useState(false);
    const [sideDiv, setSideDiv] = useState(false);


    const openTheSideDiv = () => {
        setSideDivCover(prev => !prev);
        setSideDiv(prev => !prev)
    }

    return (
        <div className="snap-div relative overflow-hidden h-full w-full flex items-center justify-center" >
            <div className={`w-[80%] absolute flex gap-20 transition-all duration-[2500ms]  ease-in-out flex-col items-start ${!sideDiv ? "ml-0" : "-ml-[150%]"}`}>
                <h1 className="w-[50rem] text-3xl text-gray-200 text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sapiente necessitatibus expedita. Provident rem, aspernatur molestias quidem perferendis totam quae.
                </h1>

                <span className="w-[25rem] text-start text-gray-400 text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim dignissimos reiciendis officia similique nam neque beatae labore, consequatur distinctio. Adipisci, ex. Provident id labore modi expedita, rerum, quasi animi, nesciunt amet quisquam voluptates error cumque. Cupiditate eligendi unde earum?
                </span>
            </div>

            <div className={`w-full h-full bg-black absolute z-20 transition-all duration-[2500ms] ease-in-out ${sideDivCover ? "-ml-[150%]" : "-mr-[150%]"}`}>
                <NextArrow
                    onClick={openTheSideDiv}
                    className=" bg-transparent absolute transition-all duration-300 left-1 top-1/2 -translate-y-1/2 hover:scale-110  hover:text-black"
                    iconClassName=" text-[10rem]"
                />

                <PrevArrow
                    onClick={openTheSideDiv}
                    className=" bg-transparent absolute transition-all duration-300 right-1 top-1/2 -translate-y-1/2 hover:scale-110  hover:text-black"
                    iconClassName=" text-[10rem]"
                />
            </div>

            <div className={`flex w-[50rem] absolute transition-all items-center duration-[2500ms] ease-in-out z-10  ${sideDiv ? "ml-[30rem]" : "-mr-[150%]"}`} >
                <div className="flex w-full flex-col items-start">
                    <div className="flex items-center gap-3">
                        <div className="size-3 bg-white rounded-full">
                        </div>
                        <h1 className=" text-[1.1rem] text-slate-300 font-semibold">
                            Lorem ipsum dolor sit amet.
                        </h1>
                    </div>
                    <div className="flex flex-col gap-0 ">
                        <p className=" text-[1.1rem] font-semibold text-gray-400" >Lorem ipsum dolor sit amet consectetur.</p>
                        <p className=" text-[1.1rem] font-semibold text-gray-400" >Lorem ipsum dolor sit amet consectetur.</p>
                        <p className=" text-[1.1rem] font-semibold text-gray-400" >Lorem ipsum dolor sit amet consectetur.</p>
                        <p className=" text-[1.1rem] font-semibold text-gray-400" >Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className="flex w-[30rem] gap-8 flex-col items-start text-slate-300">
                    <h1 className="text-2xl text-start">Lorem ipsum dolor sit amet.</h1>

                    <div>
                        <img src={img} alt="normal image" />
                    </div>

                    <p className=" text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, deserunt?
                    </p>
                </div>
            </div>
        </div>
    )
}

