import Image from "next/image";
import React from "react"

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    imgSrc?: string;
    imgAlt?: string;
    type?: "button" | "submit" | "reset";
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    width?: number;
    height?: number;
    disabled?: boolean;
    classNameImg?: string;
}


export const Button = ({ height, onClick, children, className, imgSrc, imgAlt, type, onMouseEnter, onMouseLeave, width, classNameImg }: ButtonProps) => {
    return (
        <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} type={type as "submit" | "reset" | "button" | undefined} onClick={onClick} className={className}>
            {children}
            {
                imgSrc && (
                    <Image className={classNameImg} height={height} src={imgSrc} alt={imgAlt || 'Button Image'} width={width} />
                )
            }
        </button>
    )
}