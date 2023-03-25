import { useReducer,createContext } from "react";

export const Store= createContext();

const initialState={
    cart:{
        cartItems:[],
    }
}

function reducer(state,action) {
    switch (action) {
        case 'ADD':{
            const newItem=action.payload;
            const existItem=state.cart.cartItems.find(item=>item.id===newItem.id)

            const cartItems=existItem? state.cart.cartItems.map(item=>item.name===existItem.name ? newItem:item):[...state.cart.cartItems,newItem]
            return {...state, cart : {...state.cart,cartItems}}
        }
        
        case 'REMOVE':{
            const cartItems=state.cart.cartItems.filter(item=>item.id!==action.payload.id)

            return{...state,cart:{...state.cart,cartItems}}
        }

        case 'REMOVE_CART':{
            const cartItems=[]
            return {...state,cart:{...state.cart,cartItems}}
        }
        default:
            return state
    }
}

// funcion para crear el store y envolver los componentes hijos
export function StoreProvider({children}) {
    const [state,dispatch]=useReducer(reducer,initialState)
    return <StoreProvider value={{state,dispatch}}>{children}</StoreProvider>
}