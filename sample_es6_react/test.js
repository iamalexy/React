import React, {Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);
  
    this.state={dad : "mental"};
  }

  render() {
    setTimeout(() => {
      this.setState({dad:"stupid"});
    },1000);

    return (
      <div>
        {this.state.dad}
        <h1>My Test component</h1>
        {this.props.children}

      </div>

    );
  }
}
