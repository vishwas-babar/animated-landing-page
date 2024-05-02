import React from 'react'

const NextArrow = ({ onClick, className="", iconClassName="" }) => {
    return (
        <button onClick={onClick} className={className}>
            <i className={`bx bx-chevron-right text-7xl text-[#ebc8a0] ${iconClassName}`}></i>
        </button>
    )
}

export default NextArrow