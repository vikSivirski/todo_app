import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <ButtonsList/>
            <Button className='clear-completed' text='Clear completed'/>
        </footer>
    )
}

const ButtonsList = () => {
    return (
        <ul className="filters">
            <li>
                <Button className='selected' text='All'/>
            </li>
            <li>
                <Button text='Active'/>    
            </li>
            <li>
                <Button text='Completed'/>
            </li>
        </ul>
    )
}

const Button = ({className = null, text}) => {
    return <button className = {className}>{text}</button>
}

export default Footer;