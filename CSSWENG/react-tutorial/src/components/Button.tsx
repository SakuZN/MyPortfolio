import React from 'react'

interface buttonProps {
    children: React.ReactNode
    onClick: () => void
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"
}
const Button = ({children, onClick, color = "primary"}: buttonProps) => {
    return (
        <button type="button"
                className={`btn btn-${color}`}
                onClick={onClick}>
            {children}
        </button>
    )
}

export default Button