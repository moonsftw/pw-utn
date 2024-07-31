import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <div>
      <h1>Not Found 404</h1>
      <p>Page not found</p>
      <Link to={'/'}>Go back</Link>
    </div>
    
  )
}

export default NotFound404