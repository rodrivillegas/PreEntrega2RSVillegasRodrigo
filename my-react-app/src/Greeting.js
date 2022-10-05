import { Link } from "react-router-dom"
import logo from "./components/img/logo.png"

const Greeting = () => {
    return (
        <div className="greetingStyle">
            <h2>¡Bienvenido a Coder Drinks!</h2>
            <Link to="/nuestrasBebidas">
            <button>¡Mira nuestras bebidas principales!</button>
            <br/>
            <br/>
            <img src={logo} width="350"/>
            </Link>
        </div>
    )
}

export default Greeting