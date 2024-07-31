import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  eliminarProductoPorIdFilter,
  obtenerProductoPorIdLocal,
} from "../../helpers/productos/productos";
import { useGlobalContext } from "../../Context/GlobalContext";

const Detail = () => {
  const { producto_id } = useParams();
  const { handleDeleteProduct } = useGlobalContext();
  const user = JSON.parse(localStorage.getItem("user"));
  const { nombre, descripcion, precio, id } =
    obtenerProductoPorIdLocal(producto_id);

  return (
    <>
      <section>
        <h1>{nombre}</h1>
        <div style={{ paddingBottom: "20px" }}>
          <p>{descripcion}</p>
          <span > ${precio}</span>
        </div>

        {user.role === "admin" && (
          <button
            id="btnELiminarProducto"
            onClick={() => handleDeleteProduct(id)}
            style={{ marginRight: "20px", marginBottom: "20px" }}
          >
            Eliminar
          </button>
        )}
        <Link to={"/"} className="btnLink">
          Go Back
        </Link>
      </section>
      
    </>
  );
};

export default Detail;
