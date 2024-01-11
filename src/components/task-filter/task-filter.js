import React from "react"
import Button from './button'

import './task-filter.css'

const TaskFilter = () => {
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


export default TaskFilter;