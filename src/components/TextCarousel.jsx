import React, { useState } from 'react'
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

const TextCarousel = () => {

    const [contents, setContents] = useState([
        {
            id: 1,
            title: "Title 1",
            description: "This is lorem adkfja; aofdhajf dklfjao adsflnflknf dfhladf the description for title 1"
        },

        {
            id: 2,
            title: "Title 2",
            description: "This adfjkl asdfk ;afj adfkh o asdfhh alfdhk; aadklfis the description for title 2"
        },

        {
            id: 3,
            title: "Title 3",
            description: "This adfjklaj adfj aodf a aasfd;ajs afn is the description for title 3"
        },

        {
            id: 4,
            title: "Title 4",
            description: "This ajdfop ajdfl ;ladh ladfkjj a;llkfoe idfn is the description for title 4"
        },

        {
            id: 5,
            title: "Title 5",
            description: "This lakdfj dfj oa  adfkdj lfj kld;klas is the description for title 5"
        },

        {
            id: 6,
            title: "Title 6",
            description: "This is lladf oijhoilk dfoio the description for title 6"
        },

        {
            id: 7,
            title: "Title 7",
            description: "Thisadf  adfj l;adffi  alkfk is the description for title 7"
        },

        {
            id: 8,
            title: "Title 8",
            description: "Thisadf,mmkl afljf is the description for title 8"
        },

        {
            id: 9,
            title: "Title 9",
            description: "This is the description for title 9"
        },

        {
            id: 10,
            title: "Title 10",
            description: "This is the description for title 10"
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
                    <div key={content.id} className={`transition-all duration-500 ease-in-out p-4 w-72 h-52 shadow shadow-white rounded-md ${getTheClassName(index)} `}>
                        <h1 className='text-3xl text-white'>{content.title}</h1>
                        <p className='text-white mt-7'>{content.description}</p>
                    </div>
                ))}
            </div>
            <NextArrow className='absolute z-20 top-1/2 -translate-y-1/2 -right-52' onClick={handleNext} />
        </div>
    )
}

export default TextCarousel