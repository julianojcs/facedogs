import UserHeader from './UserHeader'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import Feed from '../Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {
  const { path } = useRouteMatch()

  return (
    <section className='container'>
      <UserHeader />
      <Switch>
        <Route exact path={`${path}/`} component={Feed} />
        <Route path={`${path}/post`} component={UserPhotoPost} />
        <Route path={`${path}/statistics`} component={UserStats} />
      </Switch>
    </section>
  )
}

export default User
