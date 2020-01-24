import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './views/home';
import Reports from './views/reports';
import Helper from './views/helper';
import styled from 'styled-components';
import ReportDetail from './views/reportdetail';

const Navigation = styled.nav`
  background-color: #fc9f1c;
  color: white;
  display: flex;
  flex-direction: row;
  ul {
    list-style: none;
  }
`;

export default function App() {
  return (
    <Router>
      <div>
        <Navigation>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/reports'>Reports</Link>
            </li>
            <li>
              <Link to='/helper'>My job</Link>
            </li>
          </ul>
        </Navigation>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/reports' component={Reports}></Route>
          <Route path='/helper' component={Helper}></Route>
          <Route exact path='/reports/:id' component={ReportDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}
