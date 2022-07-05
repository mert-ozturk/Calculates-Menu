import React from 'react'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = () => {
  return (
    <div>
      
    </div>
  )
}

export default AppProvider
