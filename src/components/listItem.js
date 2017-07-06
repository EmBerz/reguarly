import React, {Component} from 'react';
import Button from './button.js'
import FrequencyInput from './frequencyInput.js';
import Frequency from '../models/frequency.js';

export default class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = props;
  }
  render() {
    if(!this.state.saved){
      return (
              <li className="task unsaved-task">
                <div className="task-description">
                  <input type="text" ref="title" name="title"  placeholder="Do this" onChange={this.handleChange.bind(this)} defaultValue={this.state.title}/>
                  <FrequencyInput frequency={this.state.frequency} updateFrequency={this.updateFrequency.bind(this)}/>
                </div>
                <input ref="description" className="long" type="text" placeholder="why?" name="description" onChange={this.handleChange.bind(this)} defaultValue={this.state.description}/>
                <Button label="Save" className='save' handleClick={this.save.bind(this)}/>
              </li>
            )
    }
    return (
      <li className="task">
        <div className="task-description">
          <span>{this.state.title} </span>
          <span className='frequency'>{new Frequency(this.state.frequency.amount, this.state.frequency.unit).getDescription()}</span>
        </div>
        <div className="item-description">
          {this.state.description}
        </div>
        <Button label="Edit" className="edit-button" handleClick={this.edit.bind(this)}/>
      </li>

    )
  }
  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    );
  }

  updateFrequency(frequency){
    let key = isNaN(frequency.target.value) ? 'unit' : 'amount'
    let currFreq = this.state.frequency;

    currFreq[key] = frequency.target.value
    this.setState({
      frequency : currFreq
    })

  }

  save(){
    this.setState({saved : true})
    this.props.saveNew(this.state)
  }

  edit(){
    this.setState({saved: false})
  }
}


ListItem.defaultProps = {
  saved: true
}
