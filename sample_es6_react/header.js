import React, { Component } from 'react';

export default class Header extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <p>Heading1 {this.props.test}</p>
    );
  }
}
