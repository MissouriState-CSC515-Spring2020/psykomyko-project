import React from 'react';
import NavBar from './components/NavBar'
import {
  Jumbotron     
} from 'reactstrap';
import './App.css';

export default class App extends React.Component { 

  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron>
          <h1 className="display-3">CSC515 School Project</h1>
          <p className="lead">Welcome to my project!</p>
          <hr className="my-2" />
          <p>Checkpoint 2</p>
          <p className="lead">
          </p>
        </Jumbotron>   

      </div>
    );
  }  
};
