import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './Assets/fabric.css';
import './Controls/Chatbot/Chatbot.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HistoryView from './HistoryView';

const routing = (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/history" component={HistoryView} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 