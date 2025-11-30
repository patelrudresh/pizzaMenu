import React from 'react'

function Footer() {

  const hour=new Date().getHours();
  const openHour=10;
  const closeHour=22;
  const isOpen=hour>=openHour && hour<=closeHour
 
  // if(isOpen) alert("we're currently open!"); 
  // else alert("sorry we;re closed"); 
  return (
   <footer>
    <div className='' style={{fontWeight:"bold"}}>
    {isOpen &&<p>We're Open Till {" "+ closeHour } :00. Come visit us or order</p>}
    <button className='btn'> Order</button>
    </div>
   </footer>
  )
}

export default Footer
