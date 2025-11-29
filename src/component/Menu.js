import React from 'react'
import TestPizza from './TestPizza'
import { pizzaData } from '../data'
function Menu() {
  
  return (
    <div >
       <h2 style={{color:"red"}}>Our Menu</h2>
       <TestPizza  data={pizzaData}/>
    </div>
  )
}

export default Menu
