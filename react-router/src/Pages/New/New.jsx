import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";

const New = () => {
  const { handleCreateProducto } = useGlobalContext();
  const CATEGORIAS_DISPONIBLES = ["tecnología", "hogar", "deporte"];
  const [formValues, setFormValues] = useState({ categoria: "" });
  const handleChangeValue = (e) => {
    e.preventDefault();
    const nameInput = e.target.name;
    const selectedOpcion = e.target.value;
    setFormValues({ ...formValues, [nameInput]: selectedOpcion });
  };
  console.log(formValues)
  return (
    <div>
      <h1>Crear producto</h1>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleCreateProducto}
      >
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" /* content='Hola' */ />

        <label htmlFor="descripcion">Descripción</label>
        <textarea name="descripcion" id="descripcion"></textarea>

        <label htmlFor="precio">Precio</label>
        <input type="number" id="precio" name="precio" />

        <label htmlFor="stock">Stock</label>
        <input type="number" id="stock" name="stock" />

        <label htmlFor="codigo">Código</label>
        <input type="text" id="codigo" name="codigo" />

        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          name="categoria"
          onChange={handleChangeValue}
          defaultValue={""}
        >
          {CATEGORIAS_DISPONIBLES.map((categoria, index) => (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          ))}
          <option value={""} disabled>
            No seleccionado
          </option>
        </select>

        <label htmlFor="imagen">Ingrese la dirección de la imagen</label>
        <input type="text" id="imagen" name="imagen" />

        <input
          type="submit"
          value="Crear producto"
          style={{ marginTop: "20px" }}
        />
      </form>
      <button style={{ marginTop: "20px" }}>
        <Link to={"/"}>Volver</Link>
      </button>
    </div>
  );
};

export default New;
