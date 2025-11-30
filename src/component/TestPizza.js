
import React from "react"
import { pizzaData } from "../data"

export default function TestPizza({data}){
      
    return<>
    <div className="pizza-list">
    {data.map((item , index)=>
        <li key={index} className={`pizza-card ${item.soldout ? "sold-out" : ""}`} >
            <h2>{item.name}</h2>
           <div > <img src={item.photoName} height="30%" width="40%"></img></div>
            <h2 className="price">₹
                {item.soldout ? (
    <span className="price">Sold Out</span>
  ) : (
    <span className="price">₹{item.price}</span>
  )}
            </h2> 
            <p>{item.ingredients}</p>
        </li>
    )}
    </div>
    </>
}