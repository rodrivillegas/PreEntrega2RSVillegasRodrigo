import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(1);

  const sumarBebida = () => {
    setContador(contador + 1);
  };

  const restarBebida = () => {
    setContador (contador - 1)
    if (contador <= 1) {
      setContador(1);
    }
  };

  return (
    <div>
      <button onClick={sumarBebida}>+</button>
      <p>{contador}</p>
      <button onClick={restarBebida}>-</button>
    </div>
  );
}

export default Contador;
