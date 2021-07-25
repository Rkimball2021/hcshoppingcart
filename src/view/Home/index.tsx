import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.png';

import { Container } from './style';
import api from '../../services/api';

const products={
  "produtos": [
    {
      "id": 1,
      "photo": "https://th.bing.com/th/id/R.0fe8e50e753704265fe7fe5c73359de3?rik=uElx7Ip0jomVig&pid=ImgRaw",
      "name":"Coder Sweatshirt Unisexo",
      "description": "Unisex, Sizes: S/M/L/XL",
      "price": 150
    },
    {
      "id": 2,
      "photo": "https://th.bing.com/th/id/OIP.OQGGrMawlcO7iAi6d2gMlgHaIl?pid=ImgDet&rs=1",
      "name":"Coder T-shirt",
      "description": "Unisex, Sizes: S/M/L/XL",
      "price": 150
    },
    {
      "id": 3,
      "photo": "https://i.pinimg.com/originals/40/ef/0c/40ef0c55efb2e0854f0f6184b8261386.jpg",
      "name":"Coder T-shirt",
      "description":  "Sizes: S/M/L/XL",
      "price": 75
    },
    {
      "id": 4,
      "photo": "https://th.bing.com/th/id/OIP.34GYfQijIx7XqtGeeHvhqAAAAA?pid=ImgDet&rs=1",
      "name":"Coder Coffee Cup",
      "description": "Comes in Green, Purple or Black",
      "price": 25
    }
  ]  
}
interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;

}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>(products.produtos);
  const [ cart, setCart ] = useState<IProduct[]>(products.produtos);
  

  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);




  const handleCart = ( index: number ) => {
    let product = data[index]
    setCart(cart => [...cart,product]);
  }

  return(
    <Container>
      <div className="nav">

        <div className="cart">
          <img src={Cart} alt="shopcart" width="50px" height="auto" />
          <span>( {cart.length} ) - Itens</span>
        </div>
      </div>
      <section>
        { data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="Coder Sweatshirt" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={ () => handleCart(index)}> Adicionar ao carrinho</button>                                    
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;
