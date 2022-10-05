import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contacto from "./components/Contacto";
import Cervezas from "./components/Cervezas";
import ItemDetail from "./components/ItemDetail";
import Greeting from "./Greeting";
import ItemCategory from "./components/ItemCategory";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nuestrasBebidas" element={<ItemListContainer />} />
        <Route path="/:bebida" element={<ItemDetail />} />
        <Route path="/categoria/:categoria" element={<ItemCategory />} />
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
