import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import prod from "../productos.json";

const ItemDetail = () => {
  const beb = useParams();
  const bebidaOk = beb.bebida;
  const [drink, setDrink] = useState({});

  useEffect(() => {
    const estaBebida = prod.find((bebida) => bebida.name == bebidaOk);
    setDrink(estaBebida);
  }, [bebidaOk]);


  return (
    <>
      <div className="drinkDetail">
        <h2>{drink.name}</h2>
        <img src={drink.img} />
        <h3>{drink.description}</h3>
      </div>
    </>
  );
};

export default ItemDetail;
