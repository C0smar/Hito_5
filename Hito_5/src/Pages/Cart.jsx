import React, { useState } from 'react';
import pizzaCartData from '../components/pizzaCart'; 
import CartCardPizza from '../components/CartCardPizza';

const Cart = () => {
  
  const [pizzaCart, setPizzaCart] = useState(
    pizzaCartData.map(pizza => ({ ...pizza, cantidad: 1 }))
  );

  
  const incrementarCantidad = (index) => {
    const actualizarCart = [...pizzaCart];
    actualizarCart[index].cantidad += 1;
    setPizzaCart(actualizarCart);
  };


  const disminuirCantidad = (index) => {
    const actualizarCart = [...pizzaCart];
    if (actualizarCart[index].cantidad > 1) {
        actualizarCart[index].cantidad -= 1;
    } else {
      
      actualizarCart.splice(index, 1);
    }
    setPizzaCart(actualizarCart);
  };


  const totalPrice = pizzaCart.reduce(
    (total, pizza) => total + pizza.price * pizza.cantidad,
    0
  );

  return (
    <div>
      <div className="grilla">
        {pizzaCart.map((pizza, index) => (
          <div key={index}>
            <CartCardPizza pizza={pizza} />
            <div className='cajaBtn'>
              <button className='btnDisminuir' onClick={() => disminuirCantidad(index)}>-</button>
              
              <button className='btnIncremento' onClick={() => incrementarCantidad(index)}>+</button>
            </div>
            <p className='subTotal'>Subtotal: ${pizza.price * pizza.cantidad}</p>
          </div>
        ))}
      </div>

      <div className='cajaTotal'>
        <h2 className='totalCompra'> 🛒Total de la compra: ${totalPrice}</h2>
        <button className='btnTotal' onClick={() => alert('Tu compra esta siendo procesada')}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;