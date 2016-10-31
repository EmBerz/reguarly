import React, { Component } from 'react'
import ListItem from './listItem'
import Button from './button'

export default class TaskList extends Component {
  constructor(props){
    super(props)

    this.state = {
      tasks: this.props.tasks
    }
  }
  render(){
    let itemizedTasks = this.state.tasks.map((task)=>{
      return <ListItem {...task} key={task.title || 'new'} saveNew={this.saveNewTask.bind(this)}/>
    })

    return (
      <div>
        <ul>
        {itemizedTasks}
        </ul>
        <Button handleClick={this.addTask.bind(this)} label='Add' />
      </div>
    )
  }
  addTask() {
    let tasks = this.state.tasks
    tasks.push({
      title: undefined,
      description: undefined,
      key:"new",
      saved: false
    })
    this.setState({
      tasks: tasks
    })
  }
  saveNewTask(event) {

  }
}
