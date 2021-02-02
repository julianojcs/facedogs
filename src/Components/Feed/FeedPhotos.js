import { useEffect } from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../Api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6
      const { url, options } = PHOTOS_GET({ page, total, user })
      // const { url, options } = PHOTOS_GET({ page: 1, total: total, user: 0 }) //! user:0 retorna as fotos de todos os usuários
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
  else return null
}

export default FeedPhotos
