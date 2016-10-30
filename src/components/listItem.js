import React, {Component} from 'react';

export default class ListItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    if(!this.props.task){
      return (<li>
              <input type="text" value={this.props.task} onKeyDown={this.props.saveNew.bind(this, this.value)} />
              </li>)
    }
    return (
      <li>
        {this.props.task}
        {this.props.frequency}
        <div className="item-description">
          {this.props.description}
        </div>
      </li>

    )
  }
}
