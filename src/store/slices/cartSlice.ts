import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/models';

interface CartState {
    cartItems: Product[];
    totalQuantity: number;
    totalPrice: number;
}

const initialState: CartState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        createCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            localStorage.setItem('totalQuantity', state.totalQuantity.toString());
            localStorage.setItem('totalPrice', state.totalPrice.toString()); 
        },
        addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
            const { product, quantity } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === product.id);
            if (itemIndex >= 0) {
              state.cartItems[itemIndex].quantity += quantity;
            } else {
              const newItem = { ...product, quantity };
              state.cartItems.push(newItem);
            }
            // Update totalQuantity and totalPrice based on quantity
            state.totalQuantity += quantity;
            state.totalPrice += product.price * quantity;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));  
            localStorage.setItem('totalQuantity', state.totalQuantity.toString());
            localStorage.setItem('totalPrice', state.totalPrice.toString());   
      
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems.splice(itemIndex, 1);
                // Update totalQuantity and totalPrice
                state.totalQuantity -= state.cartItems[itemIndex].quantity;
                state.totalPrice -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));   
                localStorage.setItem('totalQuantity', state.totalQuantity.toString());
                localStorage.setItem('totalPrice', state.totalPrice.toString());
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
            localStorage.removeItem('cartItems');
            localStorage.removeItem('totalQuantity');
            localStorage.removeItem('totalPrice');
        },
    },
});

export const { addToCart, removeFromCart, clearCart, createCart } = cartSlice.actions;

export default cartSlice.reducer;