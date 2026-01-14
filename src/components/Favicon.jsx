import { useEffect } from 'react'

const Favicon = () => {
  useEffect(() => {
    // Supprimer l'ancien favicon
    const existingFavicon = document.querySelector("link[rel='icon']")
    if (existingFavicon) {
      existingFavicon.remove()
    }

    // Créer le nouveau favicon avec le lien direct
    const link = document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/svg+xml'
    link.href = 'https://swigs.online/uploads/swigswebsite/1768372103911-751439005.svg'
    document.head.appendChild(link)
  }, [])

  return null // Ce composant ne rend rien visuellement
}

export default Favicon
