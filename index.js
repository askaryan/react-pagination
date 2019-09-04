import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyApp from './components/App';
import Users from './components/Users';
import Contact from './components/Contact';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import Notfound from './components/notfound'
import TodoApp from './utils/TodoApp';


const routing = (
    <Router>
     <div>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}

        <ul>
                <li>
                <NavLink exact activeClassName="active" to="/">
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/users">
                    Users
                </NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/contact">
                    Contact
                </NavLink>
                </li>
                <li>
                <NavLink activeClassName="active" to="/todoApp">
                    Pagination TodoApp
                </NavLink>
                </li>
                
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={MyApp} />
        {/* <Route path="/users/:id" component={Users} /> */}
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/todoApp" component={TodoApp} />        
        <Route component={Notfound} />
      </Switch>
    </div>
    </Router>
  )


//ReactDOM.render(<routing />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
