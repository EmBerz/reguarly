import React, { Component } from 'react'
import ListItem from './listItem'
import AddButton from './addButton'

export default class TaskList extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: this.props.tasks
    }
  }
  render(){
    let itemizedTasks = this.state.tasks.map((task)=>{
      return <ListItem {...task} key={task.task} saveNew={this.saveNewTask.bind(this)}/>
    })
    return (
      <div>
        <ul>
        {itemizedTasks}
        </ul>
        <AddButton addHandler={this.addTask.bind(this)} />
      </div>
    )
  }
  addTask() {
    let tasks = this.state.tasks
    tasks.push({
      task: undefined,
      description: undefined,
      key:"new"
    })
    this.setState({
      tasks: tasks
    })
  }
  saveNewTask(event) {
    console.log(event.target.value)
  }
}
