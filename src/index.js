import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import NewTaskForm from './components/new-task-form';
import Tasks from './components/task-list';
import Footer from './components/footer';

import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

function App() {
  const [todoData, setTodoData] = useState([
    { text: 'Completed task', done: false, id: 1 },
    { text: 'Editing task', done: false, id: 2 },
    { text: 'Active task', done: false, id: 3 },
  ]);

  const [filter, setFilter] = useState('all');

  const createTodoItem = (text) => ({
    text,
    done: false,
    id: Math.random().toString(36).slice(2),
  });

  const deleteItem = (id) => {
    setTodoData((prevData) => prevData.filter((el) => el.id !== id));
  };

  const addItem = (text) => {
    setTodoData((prevData) => [...prevData, createTodoItem(text)]);
  };

  const toggleDone = (id) => {
    setTodoData((prevData) =>
      prevData.map((el) =>
        el.id === id ? { ...el, done: !el.done } : el
      )
    );
  };

  const filterData = (data, currentFilter) => {
    switch (currentFilter) {
      case 'active':
        return data.filter((el) => !el.done);
      case 'completed':
        return data.filter((el) => el.done);
      default:
        return data;
    }
  };

  const filteredData = filterData(todoData, filter);

  return (
    <section className="todoapp">
      <NewTaskForm onItemAdded={addItem} />
      <section className="main">
        <Tasks
          todos={filteredData}
          onDeleted={deleteItem}
          onToggleDone={toggleDone}
        />
        <Footer data={filteredData} setFilter={setFilter} />
      </section>
    </section>
  );
}

export default App;
root.render(<App />)