import { useState, useEffect } from 'react'
import styles from './UserPhotoPost.module.css'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import File from '../Forms/File'
import Error from '../Helper/Error'
import { PHOTO_POST } from '../../Api'
import { useHistory } from 'react-router-dom'
import { fileSize } from '../../util'

const UserPhotoPost = () => {
  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] = useState({})
  const [value, setValue] = useState('Clique e selecione uma imagem')
  const { data, error, loading, request } = useFetch()
  const history = useHistory()

  useEffect(() => {
    if (data) history.push('/account')
  }, [data, history])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  const handleImgChange = ({ target }) => {
    if (target.files?.length !== 0) {
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0]
      })
      setValue(`${target.files[0].name} (${fileSize(target.files[0].size)})`)
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome} />
        <Input label='Peso' type='number' name='peso' {...peso} />
        <Input label='Idade' type='number' name='idade' {...idade} />
        <File
          accept='image/*'
          name='img'
          id='img'
          label='Imagem'
          placeHolder={value}
          filename={img}
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  )
}

export default UserPhotoPost
