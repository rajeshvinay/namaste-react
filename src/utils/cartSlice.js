import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        //originalState = {items:[{},{},etc..]}
        clearCart:(state)=>{
            // RTK either mutate the existing state or returns a new state
            // state.items.length = 0 //originalState = [];

            // or

            return {items:[]}; // this new object will be replaced inside originalState={items:[]}
        }
    }
})

// console.log(cartSlice)

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer