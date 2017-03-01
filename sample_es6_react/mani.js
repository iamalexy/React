import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.state={name:"Alex"};
  }
  changeName(userName) {
    console.log("userName", userName);
  }
  render () {
    this.changeName('testName');
    setTimeout(() => {
      this.setState({name:"Bob"});
    },1000);

    return (
      <div>
        {this.state.name}
        <h3>{this.props.nam}</h3>
        <h4>I want to apply all the properties here</h4>
        {this.props.children}
      </div>

    );
  }
}
