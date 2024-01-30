import React from 'react';

import './task-filter.css';

function TaskFilter({ setFilter }) {
  return (
    <ul className="filters">
      <li>
        <button type='selector' onClick={() => setFilter('all')}>All</button>
      </li>
      <li>
        <button type='selector' onClick={() => setFilter('active')}>Active</button>
      </li>
      <li>
        <button type='selector' onClick={() => setFilter('completed')}>Completed</button>
      </li>
    </ul>
  );
}

export default TaskFilter;
