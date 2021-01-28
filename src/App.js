import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import {Routes} from 'react-router-dom/Routes';
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import { UserStorage } from './UserContext'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
          </Switch>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App;
