import React from 'react';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.changeVal=this.changeVal.bind(this);
    this.state={value: "Andhra"};
  }

  changeVal(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return(
      <div>
        {this.state.value}
        <from>
          <h2>{this.props.title}</h2>
          <input type="text" name="fName" placeholder="Enter FirstName"/><br/><br/>
          <input type="text" name="fName" placeholder="Enter LastName"/><br/><br/>
          <button>Submit</button>
        </from>
        {this.props.children}
      </div>
    );
  }
}
