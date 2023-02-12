// import withResults from '../mocks/results_ok.json'
// eslint-disable-next-line no-unused-vars
// import withoutResults from '../mocks/results_ko.json'
import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e)
    } finally {
      // Tanto en el try como en el catch, siempre se ejecuta el finally
      setLoading(false)
    }
  }
  return { movies, loading, getMovies }
}
