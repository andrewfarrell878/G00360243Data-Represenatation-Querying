import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Main from './components/main';
import Createplayer from './components/createplayer';
import Readteam from './components/readteam';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'




class App extends React.Component {

render() {
  return (

<BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
             
              <Nav.Link href="/main">Main</Nav.Link>
              <Nav.Link href="/createplayer">Createplayer</Nav.Link>
              <Nav.Link href="/readteam">Your Team</Nav.Link>


          </Nav>
        </Navbar>
        <Switch>
        
        <Route path="/Main" component={Main} />
        <Route path="/createplayer" component={Createplayer} />
        <Route path="/readteam" component={Readteam} />

        </Switch>
        </div>
        </BrowserRouter>

        );
  }
}

export default App;