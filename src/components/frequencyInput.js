import React, { Component } from 'react';
import Frequency from '../models/frequency.js';

export default class FrequencyInput extends Component {
  constructor(props){
    super(props);
  }

  render(){
      return (
        <span className="frequency">
          <input type="number" min="1" max="300" placeholder="#" onChange={this.props.updateFrequency}/>
          {"time" + ((this.props.frequency.amount && this.props.frequency.amount) == 1 ? "" : "s")} per &nbsp;
          <select  defaultValue="week" onChange={this.props.updateFrequency}>
            <option value="year">year</option>
            <option value="month">month</option>
            <option value="week">week</option>
            <option value="day"> day</option>
          </select>
          <span className="arrow-down"></span>
        </span>
      )
  }
}
