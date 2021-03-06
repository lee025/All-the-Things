import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Redirect } from 'react-router-dom';

import LogInFormContainer from '../components/session_form/login_form_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomePage from './home_page';

  const App = () => (

    <div className="greeting-container group">
        <GreetingContainer />

      <Switch>
        <AuthRoute exact path="/" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/lists" component={HomePage} />
        <Redirect to='/' />
      </Switch>

      {/* <ProtectedRoute path='/lists' component={TaskIndexContainer} /> */}

      {/* <div className="group2"></div> */}
      <footer className="footer-main">
        <div className="footer-container">
          <div className="footer-img">{/* insert image */}</div>
          <div className="footer-input">
            <ul className="footer-list">
              <li className="fab fa-github"> |  <a href="https://github.com/lee025">GitHub</a>
              </li>
              <li className="fab fa-linkedin-in"> | <a href="https://www.linkedin.com/in/deborah-lee-5a7a4828/">LinkedIn</a>
              </li>
              <li className="fab fa-angellist">  | <a href="https://angel.co/deborah-lee-27">AngelList</a>
              </li>
              <li className="far fa-folder"> | <a href="https://deblee.dev">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
        <small className="footer-copy">
          &copy; 2019 All the Things. All rights reserved.
        </small>
      </footer>
    </div>
  );

export default App;


