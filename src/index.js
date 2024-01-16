import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'
import NewTaskForm from './components/new-task-form';
import Tasks from './components/task-list';
import Footer from './components/footer';

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

export default class Main extends Component {
  state = {
    todoData: [
      {text: 'Completed task', id: 1},
      {text: 'Editing task', id: 2},
      {text: 'Active task', id: 3}
    ]
  }

  deleteItem= (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx+1)
      ]

      return{
        todoData: newData
      }
    })
  }

  render() {
    return (
      <section className='main'>
        <Tasks 
          todos={this.state.todoData} 
          onDeleted={ (id) => this.deleteItem(id)} 
        />
        <Footer/>
      </section>
    )
  }
}

root.render(<App/>)


