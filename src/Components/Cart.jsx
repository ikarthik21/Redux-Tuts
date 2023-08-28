import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { del } from '../Store/cartSlice';

const Cart = () => {

    const dispatch = useDispatch()


    const cartProducts = useSelector(state => state.cart)

    const removeItem = (item) => {
        dispatch(del(item.id))
    }


    return (
        <div className='flex items-center justify-center flex-wrap m-32'>


            {

                cartProducts.map(item => {
                    return (
                        <div className='flex   flex flex-col items-center h-96 w-96 justify-center  p-4 m-4 bg-gray-700 rounded-xl' >
                            <img src={item.image} alt="" className='h-40 rounded-xl w-40' />
                            <h3 className='m-1 '>{item.title}</h3>
                            <p className='m-2'>{item.category}</p>
                            <p>Price  : Rs. {item.price}</p>
                            <button className='bg-red-400 px-4 py-1 m-2 pointer rounded border-white' onClick={() => {
                                removeItem(item);
                            }} >Remove</button>
                        </div>

                    )
                })

            }


        </div>
    )
}

export default Cart