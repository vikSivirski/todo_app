import React from 'react';
import TaskFilter from '../task-filter';
import Button from '../task-filter/button';

import './footer.css';

function Footer({ data, setFilter }) {
  const doneCounter = data.filter((el) => !el.done).length;

  return (
    <footer className="footer">
      <span className="todo-count">{doneCounter} items left</span>
      <TaskFilter setFilter={setFilter} />
      <Button className="clear-completed" text="Clear completed" />
    </footer>
  );
}

export default Footer;