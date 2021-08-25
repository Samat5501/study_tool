import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import './app.css'
import Home from './pages/Home/Home'
import Nav from './pages/Navbar/Nav'
import In from './pages/Sign/In'
import Login from './pages/Sign/Login'
import UserProfile from './pages/UserProfile/UserProfile'
import routes from './routes'
import Main from './Main'
import DarkModeToggle from './DarkMode/DarkModeToggle'
import Need from './pages/NeedHelp/Need'

function App() {
const state = useSelector((state) => state);
const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(state));
  }, [currentUser, state]);
  //  -------------

const info = useSelector(state => state.info)
// window.localStorage.clear();
useEffect(() => {
    localStorage.setItem('info', JSON.stringify(state))
}, [info, state])
  
  return (
    <div className="container">
      <Router>
        <div className=' app-wrapper'>
          
          <Nav />
          <Switch>
            <Route exact path={routes.home}>
               <Home/>
            </Route>
            <Route path='/content'>
              <Main />
            </Route>
            <Route path={routes.help} component={Need}/>
             <Route path={routes.user_profile}>
               <UserProfile/>
            </Route>
             <Route path={routes.sign_up} component={In}/>
             <Route path={routes.login} component={Login}/>
           </Switch>
          </div>
      </Router>
      </div>
    )
}

export default App