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
  const handleClick = () => {
    document.querySelector('input[type="file"]').click()
  }

  return (
    <div className={stylesInput.wrapper} style={{ position: 'relative' }}>
      <label className={stylesInput.label}>{label}</label>

      <input
        className={`${stylesInput.input} ${styles.file}`}
        onClick={handleClick}
        value={placeHolder}
        readOnly
      />

      {error && <p className={stylesInput.error}>{error}</p>}

      <input
        type='file'
        accept={accept}
        id={name}
        name={name}
        filename={filename}
        onChange={onChange}
      />
    </div>
  )
}

export default File
