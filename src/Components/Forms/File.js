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

      <span onClick={handleClick} className={styles.searchIcon}>
        <input
          className={`${stylesInput.input} ${styles.file}`}
          value={placeHolder}
          readOnly
        />
      </span>

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
