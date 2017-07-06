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
    let itemizedTasks = this.state.tasks.map((task, i)=>{
      return <ListItem {...task} index={i} key={task.title || Math.random()} saveNew={this.saveTask.bind(this)}/>
    })

    return (
      <div>
        <ul>
        {itemizedTasks}
        </ul>
        <Button className="add" style={{ 'marginBottom': '8px', 'marginTop': '-20px'}} handleClick={this.addTask.bind(this)} label='Add' />
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
  saveTask(t) {
console.log('******',t)
    let task = {
      title: t.title,
      description: t.description,
      frequency: {
        amount : t.frequency.amount,
        unit: t.frequency.unit
      },
      saved: true,
      key: t.title
    }
    let tasks = this.state.tasks;
    if(t.index != tasks.length-1){
        tasks[t.index] = task;
    } else{
      tasks.splice(tasks.length-1)
      tasks.push(task)
    }
    console.log('tasks', tasks)
    this.setState({ tasks })

  }
}
