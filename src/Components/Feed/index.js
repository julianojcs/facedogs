import { useState, useEffect } from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import { useRouteMatch } from 'react-router-dom'

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null)
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true)
  const { path } = useRouteMatch()
  console.log(path)

  useEffect(( ) => {
    let wait = false
    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if (scroll > height * 0.85 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }
    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    window.addEventListener('touchmove', infiniteScroll)  //! for mobile
    
    //! Clear/Remove those events
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('touchmove', infiniteScroll)
    }
  }, [infinite])

  return (
    <>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem 0',
            color: '#888',
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </>
  )
}

export default Feed
