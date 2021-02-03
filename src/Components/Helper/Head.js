import { useEffect } from 'react'

const Head = (props) => {
  useEffect(() => {
    document.title = props.title + ' | Dogs'
    let metaDescription = document.querySelector("meta[name='description']")
    if (metaDescription === null) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.getElementsByTagName('head')[0].appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', props.description || '')
  }, [props])

  return null
}

export default Head
