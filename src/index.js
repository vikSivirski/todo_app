import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'
import NewTaskForm from './components/new-task-form/new-task-form';
import Tasks from './components/task-list/task-list';
import Footer from './components/footer/footer';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const App = ()=> {
  return (
    <section className='todoapp'>
      <NewTaskForm/>
      <Main/>
    </section>
  )
}

const Main = () => {
  // const todoData = [
  //   {class: 'completed',text: 'Completed task'},
  //   {class: 'editing', text: 'Editing task'},
  //   {class: 'editing', text: 'Editing task'},
  // ]

  return (
    <section className='main'>
      <Tasks/>
      <Footer/>
    </section>
  )
}

root.render(<App/>)


