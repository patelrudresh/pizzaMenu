
import React from "react"
import { pizzaData } from "../data"

export default function TestPizza({data}){

    return<>
    <div className="pizza-list">
    {data.map((item , index)=>
        <div key={index} className="pizza-card">
            <h2>{item.name}</h2>
           <div> <img src={item.photoName} height="30%" width="40%"></img></div>
            <h2 className="price">₹{item.price}</h2>
        </div>
    )}
    </div>
    </>
}