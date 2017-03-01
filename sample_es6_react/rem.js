import React from 'react';

export default class Rem extends React.Component {
  constructor(props) {
    super(props);
    this.state= "name:Alex";
  }
  render() {

    return(
      <div>
        {this.state.nmae}
      </div>


    );
  }

}
