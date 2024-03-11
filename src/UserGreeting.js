import React from 'react'

export default function UserGreeting(props) {
  
    if(props.isLoggedIn){
return(
    <h2>welcome {props.userName}</h2>
)
    }
    return(
        <h2>plss loginn</h2>
    )
  
}
