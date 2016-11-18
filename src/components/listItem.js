import React, {Component} from 'react';
import Button from './button.js'
import FrequencyInput from './frequencyInput.js';
import Frequency from '../models/frequency.js';

export default class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = props;
    console.log('list item props',props)
    this.frequency = new Frequency(props.frequency.amount, props.frequency.unit)
  }
  render() {
    if(!this.state.saved){
      return (
              <li className="task unsaved-task">
                <div className="task-description">
                  <input type="text" name="title"  placeholder="Do this" onChange={this.handleChange.bind(this)}/>
                  <FrequencyInput frequency={this.props.frequency} updateFrequency={this.updateFrequency.bind(this)}/>
                </div>
                <input className="long" type="text" placeholder="why?" name="description" onChange={this.handleChange.bind(this)}/>
                <Button label="Save" handleClick={this.save.bind(this)}/>
              </li>
            )
    }
    return (
      <li className="task">
        <div className="task-description">
          <span>{this.state.title} </span>
          <span className='frequency'>{this.frequency.getDescription()}</span>
        </div>
        <div className="item-description">
          {this.state.description}
        </div>
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
    console.log('freq',frequency.target.name, frequency.target.value)
    this.frequency = new Frequency(frequency.amount, frequency.unit)

      // this.setState({
      //     frequency : {
      //       amount: frequency.amount,
      //       unit: frequency.unit
      //     }
      // })

  }

  save(){
    this.setState({saved : true})
     this.props.saveNew(this.state)
  }
}

ListItem.defaultProps = {
  saved: true
}
