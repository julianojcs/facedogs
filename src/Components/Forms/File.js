import styles from './File.module.css'
import stylesInput from './Input.module.css'

const File = ({
  label,
  placeHolder,
  name,
  filename,
  accept,
  onChange,
  error
}) => {
  const file = document.querySelector('input[type="file"]')
  const field = document.querySelector('p')

  function returnFileSize(number) {
    if (number < 1024) {
      return number + 'bytes'
    } else if (number >= 1024 && number < 1048576) {
      return (number / 1024).toFixed(1) + 'KB'
    } else if (number >= 1048576) {
      return (number / 1048576).toFixed(1) + 'MB'
    }
  }

  const handleFileClick = () => {
    if (file.files.length === 0) {
      field.textContent = placeHolder
    } else {
      for (const f of file.files) {
        field.textContent = `${f.name} (${returnFileSize(f.size)})`
      }
    }
  }

  const handleParagraphClick = () => {
    file.click()
  }

  return (
    <div className={stylesInput.wrapper} style={{ position: 'relative' }}>
      <label className={stylesInput.label}>{label}</label>

      <p
        className={`${stylesInput.input} ${styles.file}`}
        onClick={handleParagraphClick}
      >
        {placeHolder}
      </p>

      {error && <p className={stylesInput.error}>{error}</p>}

      <input
        type='file'
        accept={accept}
        id={name}
        name={name}
        filename={filename}
        onChange={onChange}
        onClick={handleFileClick}
      ></input>
    </div>
  )
}

export default File
