import { useContext } from 'react'
import UserHeader from './UserHeader'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import Feed from '../Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../UserContext'

const User = () => {
  const { path } = useRouteMatch()
  const { data } = useContext(UserContext)

  return (
    <section className='container'>
      <UserHeader />
      <Switch>
        <Route exact path={`${path}/`}>
          <Feed user={data.id} />
        </Route>
        <Route path={`${path}/post`} component={UserPhotoPost} />
        <Route path={`${path}/statistics`} component={UserStats} />
      </Switch>
    </section>
  )
}

export default User
