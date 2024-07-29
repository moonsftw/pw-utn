import { Route, Routes } from "react-router-dom";
import { Cart, Detail, Home, Login, New } from "./Pages";
import "./App.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:producto_id" element={<Detail />} /> {/* /:producto_id es un parámetro de búsqueda, nos permite pasar valores por ruta */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/new" element={<New />} />
    </Routes>
  );
}

export default App;
{
  /* <Link to={"/login"}>Login</Link> */
}
{
  /* usando Link no hay un re-renderizado de la página, a diferencia de <a> que carga de nuevo la página */
}
