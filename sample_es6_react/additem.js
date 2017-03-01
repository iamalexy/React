import React, { Component } from 'react';

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textboxValue: ''
    };

    this._onChange = this._onChange.bind(this);
    this._onAddValue = this._onAddValue.bind(this);
  }
  _onAddValue() {
    this.props.onItemAddClick(this.state.textboxValue);
    this.setState({
      textboxValue: ''
    });
  }
  _onChange(e) {
    this.setState({
      textboxValue: e.target.value
    });
  }
  render () {
    return(
      <div>
        <h1>Add Control</h1>
        <input type="text" value={this.state.textboxValue} onChange={this._onChange}/>
        <button onClick={this._onAddValue}>Add</button>
      </div>
    );

  }
}
