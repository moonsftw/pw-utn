import { createContext, useContext, useState } from "react";
import { eliminarProductoPorIdFilter, obtenerProductos } from "../helpers/productos/productos";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext(); // Crear el contexto global, esto se puede llamar de cualquier forma

//Creamos un componente para proveer el contexto
export const GlobalContextProvider = ({ children }) => {
    const [productos, setProductos] = useState(obtenerProductos());
    const navigation = useNavigate()
    const handleDeleteProduct = (id) => {
        setProductos(eliminarProductoPorIdFilter(id));
        navigation('/')
      }
  return <GlobalContext.Provider value={{ productos: productos, handleDeleteProduct: handleDeleteProduct}}>{children}</GlobalContext.Provider>;
};


export const useGlobalContext = () => useContext(GlobalContext);