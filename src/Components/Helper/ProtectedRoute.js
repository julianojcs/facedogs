import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext)

  // return login ? <Route {...props} /> : <Redirect to='/login' />
  if (login === true) return <Route {...props} />
  else if (login === false) return <Redirect to='/login' />
  else return null
}

export default ProtectedRoute
