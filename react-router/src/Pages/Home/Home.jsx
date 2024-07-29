import React from "react";
import { ProductList } from "../../Components";
import { crearProducto, obtenerProductoPorIdLocal, obtenerProductos } from "../../helpers/productos/productos";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";

const Home = () => {
  const {productos} = useGlobalContext();

  const nuevoProducto = {
    nombre: "Nueva laptop",
    descripcion:
      "Potente laptop para juegos con procesador Intel Core i5, 8GB de RAM y tarjeta gráfica NVIDIA GeForce GTX 1650",
    precio: 120000,
    id: 13,
    stock: 10,
    codigo: "LT-NITRO5-1650",
    categoria: "Tecnología",
  };

  return (
    <div>
      <h1>Conoce nuestros productos</h1>
      <ProductList productos={productos} />
      <Link to="/product/new" className="btnLink">Nuevo Producto</Link>
    </div>
  );
};

export default Home;
