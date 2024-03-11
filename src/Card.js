import React from 'react'
import pic from './assets/lordshiva.jfif'

export default function Card() {
  return (
    <div className="card">
        <img className="cardImg" src={pic} alt="no img"/>
        <h2>Hello h2</h2>
        <p>Paragraph Code</p>
    </div>
  )
}
