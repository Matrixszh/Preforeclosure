import React from 'react'
import Image from 'next/image'
import right from "../public/right_arrow.png"
import left from "../public/left_arrow.png"
interface CustomArrowProps {
    onClick?: () => void;
  }
export const CustomLeftArrow:React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="custom-arrow left-arrow">
            <Image
                src={left}
                alt="Previous"
                width={28}
                height={28}
                className="cursor-pointer "
            />
        </button>
    )
}
