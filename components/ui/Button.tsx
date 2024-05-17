"use client"

import clsx from "clsx"
import { ReactNode } from "react"
import { FiMenu } from "react-icons/fi"

interface buttonProps {
    type?: "button" | "submit" | "reset"
    text: string | ReactNode
    onClick? : () => void
    actionButton?: boolean

}

export const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
    return(
        <>
            <button
                onClick={onClick}
                type={type}
                className={clsx(
                    actionButton && 'bg-gray-700 rounded-full p-2 text-white',
                    "bg-gray-700 px-2 text-white"
                )}
            >{text}</button>
        </>
    )
}
