import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.css'
import List from './pages/AddList/Index'
import Details from './pages/Details/Details'
import Sidebar from './pages/Sidebar/Sidebar'
import Css from './pages/SidebarPage/Css/Index'
import Html from './pages/SidebarPage/Html/Index'
import In from './pages/Sign/In'
import Login from './pages/Sign/Login'
import routes from './routes'

const Main = () => {
  return (
    <Router>
        <div className="main__content">
          <Sidebar />
          <Switch>
            <div className="main__content-right">
              <Route path={routes.html} component={Html} />
              <Route path="/css" component={Css} />
              <>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path={routes.list} component={List} />
              <Route path={routes.sign_up} component={In} />
                <Route path={routes.login} component={Login} />
              </>
            </div>
          </Switch>
        </div>
      </Router>
  );
}

export default Main
