import React from 'react'
import pic1 from './assets/coffee1.jfif';
// import pic from './assets/lordshiva.jfif'


export default function Cart() {
    const fruits=[
        {id:1,name:"coffee1",price:200,image:<img src={pic1}/>,button:<button>Add to Cart</button>},
        {id:2,name:"coffee1",price:200,image:<img src={pic1}/>,button:<button>Add to Cart</button>},
        {id:3,name:"coffee1",price:200,image:<img src={pic1}/>,button:<button>Add to Cart</button>},
        {id:4,name:"coffee1",price:200,image:<img src={pic1}/>,button:<button>Add to Cart</button>},
        {id:5,name:"coffee1",price:200,image:<img src={pic1}/>,button:<button>Add to Cart</button>},
        {id:6,name:"coffee1",price:200,image:<img src={pic1}/>,button:<button>Add to Cart</button>}

    ]
    const listItems=fruits.map(fruit=>
        <li key={fruit.id}>
            {fruit.name}
            {fruit.price}
            {fruit.image}
            {fruit.button}
        </li>)
  return (
<ol>{listItems}</ol>
  )
}
