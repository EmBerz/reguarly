import React, {Component} from 'react';
import Button from './button.js'
export default class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = props
  }
  render() {
    if(!this.state.saved){
      return (
              <li >
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
                <input type="text" name="frequency" value={this.state.frequency} onChange={this.handleChange.bind(this)}/>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange.bind(this)}/>
                <Button label="Save" handleClick={this.save.bind(this)}/>
              </li>
            )
    }
    return (
      <li className="task">
        <span>{this.state.title} </span>
        <span>{this.state.frequency}</span>
        <div className="item-description">
          {this.state.description}
        </div>
      </li>

    )
  }
  handleChange(event) {
    debugger;
    console.log(event.target.name, event.target.value)
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
