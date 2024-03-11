import React from 'react'
import PropTypes from 'prop-types'

export default function Lists(props) {

const itemList=props.items;
const categories=props.category;

let listItems=itemList.map(item=>
  <li key={item.id}>
    {item.name}
    {item.calories}
  </li>
  )
Lists.propTypes={
  category:PropTypes.string,
  items:PropTypes.arrayOf(PropTypes.shape(
    {
      id:PropTypes.number,
      name:PropTypes.string,
      calories:PropTypes.number
    }
  ))
}

  Lists.defaultProps={
    category:"category😁😁"
  }
  return (
    <>
    <h3>{categories}</h3>
  <ol>{listItems}</ol>

    </>
  )
}
