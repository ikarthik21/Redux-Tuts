import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    data: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload;
        }
    }
})


export default productSlice.reducer;

const { fetchProducts } = productSlice.actions;



export function getProducts() {

    return async function getallProducts(dispatch) {

        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch(fetchProducts(data));
 
    }
}

