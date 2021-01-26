import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login}  />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
