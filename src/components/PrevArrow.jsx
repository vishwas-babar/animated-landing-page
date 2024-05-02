import React from 'react'

const PrevArrow = ({ onClick, className = "", iconClassName }) => {
    return (
        <button onClick={onClick} className={className}>
            <i className={`bx bx-chevron-left text-7xl text-[#ebc8a0] ${iconClassName}`}></i>
        </button>
    )
}

export default PrevArrow;