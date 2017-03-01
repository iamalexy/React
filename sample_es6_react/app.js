import React, { Component } from 'react';
import Header from './header';
import Form from './form';
import Table from './table';
import Lin from './lin';
import Clock from './clock';
import OrderedList from './orderedList';
import Test from './test';
import Mani from './mani';
import ListItems from './listitems';
import Fly from './fly'

import Rem from './rem';


export default class App extends Component {
  constructor(props) {
    super (props);

  }

  render () {


    return (
    <div>
      <ListItems/>
        {

          /*
          <Header test="myName"/>
          <Form title="Email Form"/>
          <Form title="Application Form"/>
          <Form>
            <h5>this is a child header</h5>
          </Form>

          <Table/>
          <Lin>
            <a href="http://www.electrode.io/docs/what_is_electrode.html">page</a>
            <ul>
              <li>Apple</li>
              <li>Bananna</li>
              <li>Carrot</li>
            </ul>
          </Lin>
          <Clock/>
          <Test>
            <p>My First paragraph</p>
            <p>My Second paragraph</p>
            <input type="text" />
          </Test>

          <OrderedList>
            <li>A1</li>
            <li>A2</li>
          </OrderedList>
          <Mani nam="My name is mani"/>
          <Mani>
            <ol>

              <li>creating a component</li>
              <li>how to use properties</li>
              <li>properties with children</li>
              <li>this.props.propertyName</li>
              <li>this.props.children</li>
            </ol>
          </Mani>
          */
        }

        <Rem/>
        <Fly/>

      </div>
    );
  }
}
