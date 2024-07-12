import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    cart: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            console.log(action)
            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            )
            //-1 dönerse sepette yok demek 1 ise var
            if (itemIndex >= 0) {
                state.cart[itemIndex].cartQuantity += 1
                toast.info(`${action.payload.title} tekrar eklendi`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cart.push(tempProduct)

                toast.success(`${action.payload.title} Sepete Eklendi !`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(x => x.id !== action.payload.id)
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
            toast.error(`${action.payload.title} Silindi !`, {
                position: toast.POSITION.TOP_RIGHT,
            });
        },
        decreaseCart(state, action) {
            const itemIndex = state.cart.findIndex(
                cart => cart.id === action.payload.id
            )

            if (state.cart[itemIndex].cartQuantity > 1) {
                state.cart[itemIndex].cartQuantity -= 1
                toast.info(`${action.payload.title} Miktarı Azaltıldı !`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } else if (state.cart[itemIndex].cartQuantity === 1) {
                state.cart = state.cart.filter(x => x.id !== action.payload.id)
                localStorage.setItem("cartItems", JSON.stringify(state.cart))
                toast.error(`${action.payload.title} Silindi !`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        },
        clearCart(state, action) {
            state.cart = []
            toast.error("Sepet Temizlendi", {
                position: toast.POSITION.TOP_RIGHT,
            });
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
        },
        getTotals(state, action) {
            let { total, quantity } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            },
                {
                    total: 0,
                    quantity: 0
                })
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
})
export default cartSlice.reducer;
export const { addtoCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;