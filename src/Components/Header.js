import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to='/' className={styles.logo} aria-label='Go to Dogs Home'><Dogs /></Link>
        <Link to='/login' className={styles.login} aria-label='Go to Login area'>Login / Sign-in</Link>
      </nav>
    </header>
  )
}

export default Header
