import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Navabr = () => {
    const cartProducts = useSelector(state => state.cart)


    return (
        <div className='h-16 border-white fixed top-0 left-0 w-screen bg-green-900 flex item-center justify-center'>

            <Link to='/' className='m-2 text-lg font-bold'> Products</Link>

            <Link to='/cart' className='m-2 text-lg font-bold' > Cart {cartProducts.length}</Link>

        </div>
    )
}

export default Navabr