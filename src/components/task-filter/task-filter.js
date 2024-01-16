import React, { Component } from "react"
import Button from './button'

import './task-filter.css';

export default class TaskFilter extends Component {
    render() {
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
}
