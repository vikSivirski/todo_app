import React from "react";

import './task.css';

const TasksItem = ({appearance, text}) => {
    return (
        <li className={appearance ? appearance : ''}>
        <div className='view'>
            <input className="toggle" type="checkbox" />
            <label>
                <span className="description">{text}</span>
                <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
        <input type="text" className="edit" value="Editing task"/>
    </li>
    )
}

export default TasksItem;
