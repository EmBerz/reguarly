import React, { Component } from 'react';

export default class AddButton extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return <div className="add-button" onClick={this.props.addHandler}>Add</div>
  }
}
