"use client"

import { getUserCart } from '@/lib/actions/actions';
import { useState, useEffect } from 'react';



const CartComponent = () => {

    let [cartQty, setCartQty] = useState([])

    useEffect(() => {

        const fetchUserCart = async () => {


            const cartData = await getUserCart();
            console.log(cartData);

            setCartQty(cartData)
            return cartData

        };

        fetchUserCart();
    }, [])

console.log(cartQty);



    return (
        <>  <span className="flex items-center justify-center  inset-2/4  absolute  text-white bg-red-600 w-4 h-4 text-center  ring-white rounded-full ring-2">
            <p>
                {cartQty && cartQty.length}
            </p>
        </span>

        </>
    );
}
export default CartComponent;