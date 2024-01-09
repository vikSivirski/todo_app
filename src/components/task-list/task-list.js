import React from "react";
import TasksItem from "../task/task";

const Tasks = () => {
	return (
		<ul className="todo-list">
			<TasksItem appearance='completed' text='Completed task'/>
			<TasksItem appearance='editing' text='Editing task'/>
			<TasksItem appearance="active" text='Active task'/>
		</ul>
	)
}

export default Tasks;