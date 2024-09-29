import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardPizza({pizza}){
  return (

    <Card className='tarjeta' style={{ width: '22rem' }}>
      <Card.Img className = "imagen" variant="top" src= {pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text className='tarjetaTexto'>  Ingredientes 🍕 :
          
          <br />
        <p>{pizza.ingredients.map ((ingredient,index) => ( <li key={index}> {ingredient}</li>))}</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> <div className='menuPrecio'><strong> Precio: ${pizza.price} </strong>  </div> </ListGroup.Item>
        <ListGroup.Item> <div className='menuBotones'><button className='botonVerMas'> Ver Más 👀</button> <button className='botonAñadir'> Añadir 🛒</button> </div></ListGroup.Item>
      </ListGroup>
      
    </Card>
  );
}

export default CardPizza;