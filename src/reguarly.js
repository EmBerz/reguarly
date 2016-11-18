import React, { Component } from 'react';
import Frequency from './models/frequency'
import TaskList from './components/taskList'
import ListItem from './components/listItem'
export default class Reguarly extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [
        {
          title: 'Vaccuum',
          frequency: {
            amount: 3,
            unit: 'month'
          },
          description: 'Keep place free of tolly hair'
        },
        {
          title: 'Run a mile',
          frequency: {
            amount: 2,
            unit: 'week'
          },
          description: 'get in shape'
        },
        {
          title: 'Pair Programming for fun',
          frequency: {
            amount: 1,
            unit: 'day'
          },
          description: 'Get better and programming and communuicating at the same time!'
        }
      ]
    }
  }
  render(){

    return (
      <div id="container">
        <h1>My Habits</h1>
        <TaskList tasks={this.state.tasks}>

        </TaskList>

      </div>
    );
  }
}
