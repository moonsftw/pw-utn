import { createContext, useContext, useState } from "react";
import { crearProducto, eliminarProductoPorIdFilter, obtenerProductos } from "../helpers/productos/productos";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid'

const GlobalContext = createContext(); // Crear el contexto global, esto se puede llamar de cualquier forma

//Creamos un componente para proveer el contexto
export const GlobalContextProvider = ({ children }) => {
    const [productos, setProductos] = useState(obtenerProductos());
    const navigation = useNavigate()
    const handleDeleteProduct = (id) => {
        setProductos(eliminarProductoPorIdFilter(id));
        navigation('/');
      }

    const handleCreateProducto = (e) => {
      e.preventDefault();
      console.log('Producto creado');
      const formulario = e.target
      const formularioValores = new FormData(formulario)
      const formSchema = {
        nombre: '',
        descripcion: '',
        precio: 0,
        stock: 0,
        codigo: '',
        categoria: '',
        imagen: '',
      }

      for(let propiedad in formSchema){
        formSchema[propiedad] =  formularioValores.get(propiedad);
      }
      formSchema.id = uuid();
      console.log(formSchema)

      setProductos([...productos, formSchema])
      crearProducto(formSchema);
      console.log(productos)
      navigation('/')
    }
  return (
      <GlobalContext.Provider value={
        { 
          productos: productos, 
          handleDeleteProduct: handleDeleteProduct,
          handleCreateProducto: handleCreateProducto,
        }
      }>
          {children}
      </GlobalContext.Provider>
)
}

export const useGlobalContext = () => useContext(GlobalContext);