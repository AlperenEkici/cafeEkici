import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    order:[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    filteredOrders: []

}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        createOrder(state,action){
        const orderItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
           const {ad,soyad,telefon} = action.payload
           const customer = {ad,soyad,telefon}

           let currentId = localStorage.getItem("orderIdCounter") ? parseInt(localStorage.getItem("orderIdCounter"),10) : 0;
           const newId = currentId + 1;
           localStorage.setItem("orderIdCounter", newId);


            const tempOrder = {id:newId,customer, items:orderItems,orderState:'Bekleniyor'}
            state.order.push(tempOrder)
            toast.success(`Sipariş Alındı`, {
                position: toast.POSITION.TOP_CENTER,
            })
        },
        updateOrder(state,action){
            const index = state.order.findIndex(x => x.id === action.payload.id);
                state.order[index].orderState = action.payload.orderState;
                toast.success(`Sipariş Durumu Güncellendi`, {
                    position: toast.POSITION.TOP_CENTER,
                });
        },
        orderPlaced(state,action){
            state.filteredOrders = state.order.filter(x => x.customer.telefon.telefon === action.payload);
            console.log(typeof(action.payload));

        }
    }
});


export default orderSlice.reducer;
export const { createOrder,updateOrder,orderPlaced} = orderSlice.actions;