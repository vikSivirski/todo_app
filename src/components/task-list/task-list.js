import React from "react";
import TodoItem from "../task";

import './task-list.css'


const Tasks = ({ todos, onDeleted, onToggleDone }) => {
	const items = todos.map(item => {
	  return (
		<TodoItem
		  key={item.id}
		  text={item.text}
		  onDeleted={() => onDeleted(item.id)}
		  onToggleDone={() => onToggleDone(item.id)} 
		  done={item.done}
		/>
	  );
	});
  
	return (
	  <ul className="todo-list">
		{items}
	  </ul>
	);
  };

export default Tasks;