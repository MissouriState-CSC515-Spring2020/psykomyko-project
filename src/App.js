import React from 'react';
import NavBar from './components/NavBar'
import {
  Jumbotron     
} from 'reactstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import VideoGames from "./components/videogames";
import Movies from './components/movies';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router';

export default class App extends React.Component { 

  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <Jumbotron>
          <h1 className="display-3">CSC515 School Project</h1>
          <p className="lead">Welcome to my project!</p>
          <hr className="my-2" />
          <p>Checkpoint 5</p>
          <p className="lead">
          </p>
        </Jumbotron>

        <ul>
          <li>
            <Link to ='/'>Home</Link>
          </li>
          <li>
            <Link to ='/videogames'>Video Games - Videos</Link>
          </li>
          <li>
            <Link to ='/movies'>Movies - Videos</Link>
          </li>                 
        </ul>
            <Switch>              
              <Route path = '/videogames' component={VideoGames}/>
              <Route path = '/movies' component={Movies}/>                            
            </Switch>
      </div>
      </BrowserRouter>
    
     
    );
  }  
};