import React from 'react'

export default function Food() {
    let x="apple";
    let y="banana";
  return (
    <ul>
        <li>kiwi</li>
        <li>{x}</li>
        <li>{y.toUpperCase()}</li>
    </ul>
  );
}
