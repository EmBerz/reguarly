import React, {Component} from 'react';
import Button from './button.js'
import FrequencyInput from './frequencyInput.js';
import Frequency from '../models/frequency.js';

export default class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = props;
    this.frequency = new Frequency(this.props.frequency.amount, this.props.frequency.unit)
  }
  render() {
    if(!this.state.saved){
      return (
              <li className="task">
                <div>
                  <input type="text" name="title" value={this.state.title} placeholder="Do this" onChange={this.handleChange.bind(this)}/>
                  <FrequencyInput />
                </div>
                <input className="long" type="text" placeholder="why?" name="description" value={this.state.description} onChange={this.handleChange.bind(this)}/>
                <Button label="Save" handleClick={this.save.bind(this)}/>
              </li>
            )
    }
    return (
      <li className="task">
        <span>{this.state.title} </span>
        <span>{this.frequency.getDescription()}</span>
        <div className="item-description">
          {this.state.description}
        </div>
      </li>

    )
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  save(){
    this.setState({saved :true});
     this.props.saveNew(...this.state)
  }
}

ListItem.defaultProps = {
  saved: true
}
