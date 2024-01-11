import React from "react";

import './footer.css'

import TaskFilter from "../task-filter";
import Button from '../task-filter/button'

const Footer = () => {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TaskFilter/>
            <Button className='clear-completed' text='Clear completed'/>
        </footer>
    )
}

export default Footer;