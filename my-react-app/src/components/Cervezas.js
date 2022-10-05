import { useEffect, useState } from "react";
import prod from "../productos.json";

const Cervezas = () => {
  const [productos, setProductos] = useState([]);
  const [cervezas, setCervezas] = useState([]);

  useEffect(() => {
    const cerv = prod.filter((producto) => producto.categoria == "cerveza");
    console.log(cerv);
    setCervezas(cerv);
  }, []);

  console.log(cervezas);
  return (
    <div>
      {cervezas.map((cerveza) => {
        return (
          <div className="itemDetalle">
            <h2>{cerveza.name}</h2>
            <h3>{cerveza.description}</h3>
            <h4>Precio: ${cerveza.price}</h4>
            <img src={cerveza.img} width="300"/>
          </div>
        );
      })}
    </div>
  );
};

export default Cervezas;
