import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state={val:"more"};
  }
  render() {

    setTimeout(() =>{
      this.setState({val:"less"});
    },1000);

    return (
      <div>
        {this.state.val}
        <table>
          <tr>
            <th>FirstName</th>
            <th>lastName</th>
            <th>Univ</th>
          </tr>

          <tr>
            <td>Alex</td>
            <td>Yarli</td>
            <td>Wright</td>
          </tr>

          <tr>
            <td>Bhan</td>
            <td>Man</td>
            <td>Full</td>
          </tr>
        </table>
      </div>
    );
  }
}
