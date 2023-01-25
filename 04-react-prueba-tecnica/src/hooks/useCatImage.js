import { useEffect, useState } from 'react'

export function useCatImage({ fact }) {
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    // Tres primera palabas
    // const firstWord = fact.split(' ').slice(0, 3).join()
    // o
    // const firstWord = fact.split(' ', 3)

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then((res) => {
        if (!res.ok) throw new Error('Error fetching cat image')
        return res.json()
      })
      .then((response) => {
        const { url } = response
        console.log(response)
        setImageURL(url)
      })
  }, [fact])
  return { imageURL }
}
