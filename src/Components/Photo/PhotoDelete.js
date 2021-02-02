import styles from './PhotoDelete.module.css'
import { PHOTO_DELETE } from '../../Api'
import useFetch from '../../Hooks/useFetch'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja excluir?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Excluindo...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Excluir
        </button>
      )}
    </>
  )
}

export default PhotoDelete
