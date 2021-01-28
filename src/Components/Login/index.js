import { useContext } from 'react'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPwdRecover from './LoginPwdRecover'
import LoginPswReset from './LoginPswReset'
import { Route, useRouteMatch } from 'react-router-dom'
import { UserContext } from '../../UserContext'

function Login() {
  const { path } = useRouteMatch()
  const { login } = useContext(UserContext)

  if (login === true) return null //history.push('/account')
  return (
    <div>
      <Route path={`${path}/`} component={LoginForm} />
      <Route path={`${path}/create`} component={LoginCreate} />
      <Route path={`${path}/recover`} component={LoginPwdRecover} />
      <Route path={`${path}/reset`} component={LoginPswReset} />
    </div>
  )
}

export default Login
