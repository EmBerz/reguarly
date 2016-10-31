import React, { Component } from 'react';

import TaskList from './components/taskList'
import ListItem from './components/listItem'

export default class Reguarly extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [
        {
          title: 'Vaccuum',
          frequency: 'Once a month',
          description: 'Keep place free of tolly hair'
        },
        {
          title: 'Run a mile',
          frequency: 'twice a week',
          description: 'get in shape'
        },
        {
          title: 'Pair Programming for fun',
          frequency: 'once a week',
          description: 'Get better and programming and communuicating at the same time!'
        }
      ]
    }
  }
  render(){

    return (
      <div id="container">
        <TaskList tasks={this.state.tasks}>

        </TaskList>

      </div>
    );
  }
}
