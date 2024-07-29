import React from 'react'
import { Link } from 'react-router-dom'

const New = () => {
    
  return (
    <div>
        <form action="" style={{display:"flex", flexDirection:"column"}}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id='nombre' content='Hola'/>
            <label htmlFor="descripcion">Descripción</label>
            <input type="text" id='descripcion'/>
            <label htmlFor="precio">Precio</label>
            <input type="text" id='precio'/>
            <label htmlFor="stock">Stock</label>
            <input type="text" id='stock'/>
            <label htmlFor="codigo">Codigo</label>
            <input type="text" id='codigo'/>
            <label htmlFor="categoria">Categoria</label>
            <input type="text" id='categoria'/>
            <label htmlFor="imagen">Imagen</label>
            <input type="text" id='imagen'/>
            <button type="submit" style={{marginTop:"20px"}}>Guardar</button>
        </form>
        <button style={{marginTop:"20px"}}><Link to={"/"}>Volver</Link></button>
    </div>
  )
}

export default New