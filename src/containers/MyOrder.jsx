import React, { useContext } from 'react';
import '../styles/MyOrder.scss';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';

import IconsArrows from '@icons/flechita.svg';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumtotal = () =>{
        const reducer = (accumulator,  currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer,0);
        return sum;
    }
    return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={IconsArrows} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map(product => (
                    <OrderItem product={product} key={`orderItem-${product.id}`} />
                ))}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumtotal()}</p>
                </div>

                <button className="primary-button">
                    MyOrder
                </button>
            </div>
        </aside>
    );
}

export default MyOrder;