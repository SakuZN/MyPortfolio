import React from "react";

interface AlertProps {
    children: React.ReactNode
    visible?: boolean
    onClose: () => void
}

const Alert  = ({children, visible=false, onClose} : AlertProps) => {
    return (
        visible ?
            (
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{children}</strong>
                    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )
         : null
    )
}

export default Alert
