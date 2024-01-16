import React, { Component } from "react";

import './task.css';

export default class TodoItem extends Component {
	state = {
		done: false,
		editing: false
	}

	onLabelClick = () => {
		this.setState(({ done }) => {
			return {
				done: !done
			}
		})
	}

	render() {
		const { text, onDeleted } = this.props;
		const { done, editing } = this.state;

		let classNames = 'active'

		if (done) {
			classNames = 'completed'
		}
		if (editing) {
			classNames = 'editing'
		}


		return (
			<li className={classNames}>
				<div className='view'>
					<input className="toggle" type="checkbox" />
					<label>
						<span className="description" onClick={this.onLabelClick}>{text}</span>
						<span className="created">created 17 seconds ago</span>
					</label>
					<button className="icon icon-edit"></button>
					<button className="icon icon-destroy" onClick={onDeleted}></button>
				</div>
				<input type="text" className="edit" value="Editing task" onKeyDown={this.enterChanges} />
			</li>
		)
	}
}

