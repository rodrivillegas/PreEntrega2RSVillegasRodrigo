import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import prod from "../productos.json";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(prod);
  }, []);

  return (
    <div>
      {productos.map((bebida,index) => {
        return (
          <Link to={"/" + bebida.name}>
          <div className="estilosBebidasCatalogo" key={index} >
            <h2>{bebida.name}</h2>
            <img src={bebida.img} width="100"/>
            <h3>{bebida.description}</h3>
            <h4>Precio: ${bebida.price}</h4>
            <h5>{bebida.size}</h5>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ItemListContainer;
