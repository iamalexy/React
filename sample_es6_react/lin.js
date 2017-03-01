import React from 'react';

export default class Lin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
     <div>
        <ul>
           <li><a href="http://www.electrode.io/">Electrode</a></li>
           <a href="https://facebook.github.io/react/docs/state-and-lifecycle.html">React</a>
        </ul>
        {this.props.children}
     </div>
    );
  }
}
