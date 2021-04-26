import React from 'react'
import "./styles.css"
import userData from "./userData"
import CartItem from './CartItem'




  export default function App() {

    const AddToCartHandler = (product) => {
      console.log("Add to cart", product);

    }
    const wishListHanler = (product) => {
      console.log("from wishlist", product)
    }

    return (
      <div className="container">
        { userData.map((item) => {
          return (
            <CartItem
              key={item.id}
              product={item}
              AddToCartHandler={AddToCartHandler}
              wishListHanler={wishListHanler}
            />
          )
        })
        }
      </div>
    )

  }
