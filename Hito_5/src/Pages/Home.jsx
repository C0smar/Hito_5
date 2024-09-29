import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

const Home = () => {

  const [pizzasApi, setPizzasApi] = useState([])

  useEffect(() => {
      userFetch()
  }, [])
  

  async function userFetch (){
    const response = await fetch ('http://localhost:5000/api/pizzas')
    const pizzasApi = await response.json()

    console.log(pizzasApi)
    setPizzasApi (pizzasApi)
  }

  return (
    <div >
      <div>
        <Header/> 
      </div>


        <div className='grilla'>
        
           {pizzasApi.map((pizzas,index) => <CardPizza  pizza ={pizzas} key={index}/>)}

        </div>
    </div>
  )
}

export default Home;