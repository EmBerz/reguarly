import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return <div className={"button " + this.props.className}
                style={this.props.style}
                onClick={this.props.handleClick}>
                {this.props.label}
           </div>
  }
}
