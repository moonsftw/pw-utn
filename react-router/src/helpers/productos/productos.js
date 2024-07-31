import { productos } from "../../Data/productsData";

export const obtenerProductoPorId = (id) => {
  return productos.find((producto) => producto.id === id);
};

const guardarLocal = (productos) => {
  const productos_JSON = JSON.stringify(productos); //pasamos el array de objetos productos a un string para poder utilizarlos en setItem
  localStorage.setItem("productos", productos_JSON);
};
/**
 * Retrieves the list of products from local storage. If the list is not found,
 * it initializes it with the default product list and returns it.
 *
 * @return {Array} An array of product objects.
 */

export const obtenerProductos = () => {
  const productos_guardados = localStorage.getItem("productos");
  if (!productos_guardados) {
    guardarLocal(productos);
    return productos; // array de objetos
  }
  return JSON.parse(productos_guardados); //array de objetos
};

/* crearProducto(producto) lo guarda en localStorage con la key 'productos' */
export const crearProducto = (producto) => {
  const productos = obtenerProductos();
  const producto_encontrado = productos.find(
    (producto_buscado) => producto.id === producto_buscado.id
  );
  if (!producto_encontrado) {
    productos.push(producto);
    guardarLocal(productos);
  }
};

/* obtenerProductoPorId(id) retornar el producto que cumpla con esa id */

export const obtenerProductoPorIdLocal = (id) => {
  const productos = obtenerProductos();
  return productos.find((producto) => producto.id === id);
};

/* eliminarProductoPorId(id) eliminar el producto que cumpla con esa id */

export const eliminarProductoPorId = (id) => {
  const productos = obtenerProductos();
  const index = productos.findIndex(
    (producto) => Number(producto.id) === Number(id)
  );
  if (index !== -1) {
    productos.splice(index, 1);
    guardarLocal(productos);
  }
};

export const eliminarProductoPorIdFilter = (id) => {
  const productos = obtenerProductos();
  const nueva_lista = productos.filter(
    (producto) => Number(producto.id) !== Number(id)
  );
  guardarLocal(nueva_lista);
  return nueva_lista
};
