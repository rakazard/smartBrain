import React from 'react'

const Navigation = ({onRouteChange, signedIn}) => {
  if(signedIn){
    return (
      <nav style={{display : 'flex', justifyContent : 'flex-end'}}>
          <div className='f3 dim underline pointer pa3 ' onClick={() => onRouteChange("signIn")}>Sign Out</div>
      </nav>
    )
  }else{
    return (
      <nav style={{display : 'flex', justifyContent : 'flex-end'}}>
          <div className='f3 dim underline pointer pa3 ' onClick={() => onRouteChange("signIn")}>Sign In</div>
          <div className='f3 dim underline pointer pa3 ' onClick={() => onRouteChange("register")}>Register</div>
      </nav>
    )
  }

}


export default Navigation