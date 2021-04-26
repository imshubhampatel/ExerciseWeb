import React from 'react'

export default function CartItem(props) {
    const { product } = props;
    const { title, image, price } = product;
    const { wishListHanler, AddToCartHandler } = props;
    return (
        <>
            <div className="item-action">
                <div className="up-action">
                    <img className="image" src={image} alt="bag" />
                </div>
                <div className="down-action">
                    <h3>{title}</h3>
                    <h3>{price}</h3>
                    <button className="btn add-to-wish" onClick={() => wishListHanler(product)}>Add to wishlist</button>
                    <button className="btn add-to-cart" onClick={() => AddToCartHandler(product)}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}
