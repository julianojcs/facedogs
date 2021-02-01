import { useState, useContext, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false);

  // Faz o Menu Mobile Fechar
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink exact to='/account' activeClassName={styles.active}>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to='/account/statistics' activeClassName={styles.active}>
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/account/post' activeClassName={styles.active}>
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav