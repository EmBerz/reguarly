import React, { Component } from 'react'
import ListItem from './listItem'
import Button from './button'
import Frequency from '../models/frequency.js';

export default class TaskList extends Component {
  constructor(props){
    super(props)

    this.state = {
      tasks: this.props.tasks
    }
  }
  render(){
    console.log('tasks',this.state.tasks)
    let itemizedTasks = this.state.tasks.map((task)=>{
      return <ListItem {...task} key={task.title || Math.random()} saveNew={this.saveNewTask.bind(this)}/>
    })

    return (
      <div>
        <ul>
        {itemizedTasks}
        </ul>
        <Button style={{ 'marginBottom': '8px', 'marginTop': '-20px'}} handleClick={this.addTask.bind(this)} label='Add' />
      </div>
    )
  }
  addTask() {
    let tasks = this.state.tasks
    tasks.push({
      title: undefined,
      description: undefined,
      key:"new",
      frequency: new Frequency(),
      saved: false
    })
    this.setState({
      tasks: tasks
    })
  }
  saveNewTask(t) {
    let task = {
      title: t.title,
      description: t.description,
      frequency: {
        amount : 1,
        unit: 'week'
      },
      saved: true,
      key: t.title
    }
    console.log('task', task)
    let tasks = this.state.tasks;
    tasks.push(task)
    this.setState({ tasks })

  }
}
