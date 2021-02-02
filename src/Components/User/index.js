import { useContext } from 'react'
import UserHeader from './UserHeader'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import Feed from '../Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../UserContext'
import PageNotFound from '../404'

const User = () => {
  const { path } = useRouteMatch()
  const { data } = useContext(UserContext)

  return (
    <section className='container'>
      <Switch>
        <Route exact path={`${path}/`}>
          <UserHeader />
          <Feed user={data.id} />
        </Route>
        <Route path={`${path}/post`}>
          <UserHeader />
          <UserPhotoPost />
        </Route>
        <Route path={`${path}/statistics`}>
          <UserHeader />
          <UserStats />
        </Route>
        <Route path={`${path}/*`} component={PageNotFound} />
      </Switch>
    </section>
  )
}

export default User
