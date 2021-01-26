import { Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPwdRecover from './LoginPwdRecover'
import LoginPswReset from './LoginPswReset'
import { useRouteMatch } from 'react-router-dom'

function Login() {
  const { path } = useRouteMatch()
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
