import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (PayLoad) => {
        setState({
            ...state,// el ...state mantiene los datos ya guardados y lo que hace en cart es mantener dichos valores y agregar uno mas
            cart: [...state.cart, PayLoad]
        });
    };

    const removeFromCart = (PayLoad) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != PayLoad.id)
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;

