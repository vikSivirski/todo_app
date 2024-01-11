import React from "react";

const Button = ({className = null, text}) => {
    return <button className = {className}>{text}</button>
}

export default Button;