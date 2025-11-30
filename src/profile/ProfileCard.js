import React from 'react'
import './Card.css'
function ProfileCard() {
  return (
    <> <div className='card1'>
         <div className='imgSection'>
                <img className='avator' src="https://plus.unsplash.com/premium_photo-1669343628944-d0e2d053a5e8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile-pic"
></img>
     <div className='data'>
        <h1>hello</h1> 
        <p> i am fullstack developer on springboot java react</p>
      <div className="skills">
         <span>html</span>
         <span>css</span>
         <span>java</span>
         <span>react</span>
    </div>
      </div>
         </div>
    </div>
    </>

  )
}
 
 


export default ProfileCard
