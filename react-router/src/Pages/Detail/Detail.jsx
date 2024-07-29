import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  eliminarProductoPorIdFilter,
  obtenerProductoPorIdLocal,
} from "../../helpers/productos/productos";
import { useGlobalContext } from "../../Context/GlobalContext";

const Detail = () => {
  const { producto_id } = useParams();
  const {handleDeleteProduct} = useGlobalContext();

  const { nombre, descripcion, precio, id } =
    obtenerProductoPorIdLocal(producto_id);

 
  return (
    <>
      <section>
        <h1>{nombre}</h1>
        <p>{descripcion}</p>
        <span style={{ marginRight: "20px" }}> ${precio}</span>
        <button
          id="btnELiminarProducto"
          onClick={() => handleDeleteProduct(id)}
          style={{ marginRight: "20px", marginBottom: "20px" }}
        >
         Eliminar
        </button>
      </section>
      <section>
        <Link to={"/"} className="btnLink">Go Back</Link>
      </section>
    </>
  );
};

export default Detail;
