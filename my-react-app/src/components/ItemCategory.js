import prod from "../productos.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemCategory = () => {
  const cat = useParams();
  const categoriaOk = cat.categoria;
  const [categ, setCateg] = useState([]);

  useEffect(() => {
    const bebidasPorCat = prod.filter(
      (bebida) => bebida.categoria == categoriaOk
    );
    setCateg(bebidasPorCat);
  }, [categoriaOk]);

  console.log(categ);
  return (
    <div>
      {categ.map((bebida,index) => {
        return (
          <div key={index} className="bebidasEnCat">
            <h2>{bebida.name}</h2>
            <h3>{bebida.price}</h3>
            <h4>{bebida.description}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default ItemCategory;
