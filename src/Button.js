import React from 'react'

export default function Button() {
const handleClick=(e)=>e.target.textContent="hahhaaaa😉";
  return (
    <button onClick={(e)=>handleClick(e)}>Click Me😁</button>
  )
}
