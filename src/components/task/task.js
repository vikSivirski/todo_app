import React, { Component } from "react";

import './task.css';

export default class TodoItem extends Component {
	render() {
		const { text, onDeleted, onToggleDone, done } = this.props;

		const classNames = done ? 'completed' : 'active';

		return (
			<li className={classNames}>
				<div className='view'>
					<input className="toggle" type="checkbox" onClick={onToggleDone}/>
					<label>
						<span className="description">{text}</span>
						<span className="created">created 17 seconds ago</span>
					</label>
					<button className="icon icon-edit"></button>
					<button className="icon icon-destroy" onClick={onDeleted}></button>
				</div>
				<input type="text" 
					   className="edit" 
				       value="Editing task"
					   onChange={() => console.log('was changed')}

				/>
			</li>
		)
	}
}

