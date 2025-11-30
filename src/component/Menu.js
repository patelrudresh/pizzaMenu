import React from 'react'
import TestPizza from './TestPizza'
import { pizzaData } from '../data'
import ProfileCard from '../profile/ProfileCard'
import '../App.css'
function Menu() {
    const numPizza=pizzaData.length;
    // console.log(numPizza);
    
  return (
    <div >
       <h2 style={{color:"red"}}>Our Menu</h2>

       <>
       <p>please choise the your favourite pizzat,
        there are 6 item
       </p>
       </>
       {numPizza>0?(
        <ul>
         <TestPizza  data={pizzaData}/>
       </ul> ):0}
</div>

      
  )
}

export default Menu
