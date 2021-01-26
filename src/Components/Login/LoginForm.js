import { useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'

const LoginForm = () => {
  const { url } = useRouteMatch()
  const [user, setUser] = useState({ username: '', password: '' })

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={user.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      <Link to={`${url}/create`}>Cadastro</Link>
      <Link to={`${url}/recover`}>Recover</Link>
      <Link to={`${url}/reset`}>Reset</Link>
    </section>
  )
}

export default LoginForm
