import React, { Component } from 'react';
import AddItem from './additem';
export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [{name: 't1'}, {name : 't2'}],
      things : [],
      isValid : true
    };
    this._onClick = this._onClick.bind(this);
  }
  _onClick(itemName) {
    let { items} = this.state;
    items.push({name: itemName});
    this.setState({
      items: items
    });
  }
  render () {
    let listItems = this.state.items.map((value) => {
      return (<li>{value.name}</li>);
    });
    return(
      <div>
        <ul>
          {listItems}
        </ul>
      <AddItem onItemAddClick={this._onClick}/>
      </div>
    );
  }
}
