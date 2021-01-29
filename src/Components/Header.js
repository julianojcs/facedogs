import { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'
import { UserContext } from '../UserContext'

const Header = () => {
  const { data, loading } = useContext(UserContext)
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to='/' className={styles.logo} aria-label='Go to Dogs Home'>
          <Dogs />
        </Link>
        {data || loading ? (
          data && (
            <>
              <Link
                to='/account'
                className={styles.login}
                aria-label='Go to my account'
              >
                {data.nome}
              </Link>
            </>
          )
        ) : (
          <Link
            to='/login'
            className={styles.login}
            aria-label='Go to Login area'
          >
            Login / Sign-in
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
