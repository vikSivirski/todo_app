import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'
import NewTaskForm from './components/new-task-form/new-task-form';
import Tasks from './components/task-list/task-list';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const App = ()=> {
  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <NewTaskForm/>
      </header>
      <Main/>
    </section>
  )
}

const Main = () => {
  return (
    <section className='main'>
      <Tasks/>
    </section>
  )
}

root.render(<App/>)


