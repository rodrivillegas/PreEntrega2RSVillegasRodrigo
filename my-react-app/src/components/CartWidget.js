import logo from './img/carrito.png';

function CartWidget() {
    return (
        <div>
            <img src= {logo} className="carrito" alt="Carrito" />
        </div>
    );
}

export default CartWidget