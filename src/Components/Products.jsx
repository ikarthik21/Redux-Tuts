import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/cartSlice'
import { getProducts } from '../Store/productSlice';

const Products = () => {

    const dispatch = useDispatch();
    const { data: Products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts());

    }, [dispatch])


    const addItem = (item) => {
        dispatch(add(item));
    }

    return (
        <div className='flex items-center justify-center flex-wrap m-16'>


            {

                Products.map(item => {
                    return (
                        <div className='flex   flex flex-col items-center h-96 w-96 justify-center  p-4 m-4 bg-gray-700 rounded-xl' key={item.id}>
                            <img src={item.image} alt="" className='h-40 rounded-xl w-40' />
                            <h3 className='m-1 '>{item.title}</h3>
                            <p className='m-2'>{item.category}</p>
                            <p>Price  : Rs. {item.price}</p>
                            <button className='bg-blue-400 px-4 py-1 m-2 pointer rounded border-white' onClick={() => {
                                addItem(item);
                            }} >Add</button>
                        </div>

                    )
                })

            }






        </div>
    )
}

export default Products