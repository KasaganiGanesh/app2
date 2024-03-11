import React from 'react'

export default function Student(props) {
  return (
    <div>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Student : {props.isStudent ? "Yes" :"No"}</p>
    </div>
  )
}
Student.deafaultProps={
    name: "gani",
    age: 20,
    isStudent:false,
}
