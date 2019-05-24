import React from 'react'

export default function UnknownRoute() {
  return (
    <div style={{textAlign:"center"}}>
      <div style={{display:"inline-block"}}>
        <h1>Hey! You're not supposed to be here!</h1>
        <p style={{fontWeight:"normal", fontStyle:"italic"}}>Choco will write a better error page later... just bug him about it or something</p>
      </div>
    </div>
  )
}
