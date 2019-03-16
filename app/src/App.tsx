import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  DocumentCard
} from "office-ui-fabric-react/lib";
import { Chatbot } from './Controls/Chatbot';

class App extends Component {
  render() {
    return (
      <div>
        <div className="ms-Grid-row" style={{margin:'0px',marginBottom:'10px'}}>
          <div className="ms-Grid-col ms-sm12">

            <Chatbot></Chatbot>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
