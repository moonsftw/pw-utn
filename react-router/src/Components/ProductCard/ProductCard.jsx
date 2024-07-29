import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({producto}) => {
    const {nombre, id } = producto

  
  return (
    <div>
        <h2>{nombre}</h2>
        <Link to={'/detail/' + id} className='btnLink'>Detail</Link>
        <hr />
    </div>
  )
}

export default ProductCard