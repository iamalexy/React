import React, {Component } from 'react';

export default class OrderedList extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <ul>
          {this.props.children}
        </ul>

      </div>

    );
  }
}
