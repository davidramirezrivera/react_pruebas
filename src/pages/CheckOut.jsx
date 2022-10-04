import React from 'react';
import '../styles/CheckOut.scss';
import OrderItem from '../components/OrderItem';
import Menu from '../components/MenuDesk';

const CheckOut = () => {
    return (
        <div className="CheckOut">
            <div className="CheckOut-container">
                <h1 className="title">My order</h1>
                <div className="CheckOut-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                </div>
                <OrderItem />
            </div>
        </div>
    );
}

export default CheckOut;