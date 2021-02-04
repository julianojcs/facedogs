import {useEffect, lazy, Suspense } from 'react'
import Head from '../Helper/Head'
import useFetch from '../../Hooks/useFetch'
import { STATS_GET } from '../../Api'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'

//! Only import the Graphic Library when it will be used: 
//? The React.lazy function provides a built-in way to separate components in an application into separate chunks of JavaScript with very little legwork
// import UserStatsGraphs from './UserStatsGraphs'
const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
    return (
      <>
        <Head title="Estatísticas" />
        
        {/* https://web.dev/code-splitting-suspense/
        <div>
          <UserStatsGraphs data={data} />
        </div> */}
        <Suspense fallback={<></>}>
          <UserStatsGraphs data={data} />
        </Suspense>
      </>
    )
  else return null
}

export default UserStats
