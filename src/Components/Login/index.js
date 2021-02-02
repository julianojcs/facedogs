import { useContext } from 'react'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPwdRecover from './LoginPwdRecover'
import LoginPswReset from './LoginPswReset'
import { Route, useRouteMatch, Redirect } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'
import PageNotFound from '../404'

function Login() {
  const { path } = useRouteMatch()
  const { login } = useContext(UserContext)

  if (login === true) return <Redirect to='/account' />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Route exact path={`${path}/`} component={LoginForm} />
        <Route path={`${path}/create`} component={LoginCreate} />
        <Route path={`${path}/recover`} component={LoginPwdRecover} />
        <Route path={`${path}/reset`} component={LoginPswReset} />
        <Route path={`${path}/*`} component={PageNotFound} />
      </div>
    </section>
  )
}

export default Login
