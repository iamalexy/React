import React from "react";

export default class Fly extends React.Component {
  constructor(props) {
    super(props);
    this.state= {nam: "peru"};
  }
  render() {

    return(
    <div>
      <p>lets try how it works</p>
      <h6> it is very painfull</h6>
      {this.state.nam}

    </div>
    );
  }
}
