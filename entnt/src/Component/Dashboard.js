import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Component/Dashboard.css';

const Dashboard = () => {
    const [totalProducts, setTotalProducts] = useState(0);
    const [highestProductPrice, setHighestProductPrice] = useState(0);
    const [lowestProductPrice, setLowestProductPrice] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [ordersDelivered, setOrdersDelivered] = useState(0);
    const [ordersPending, setOrdersPending] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsResponse = await axios.get("http://localhost:8080/Product");
                const ordersResponse = await axios.get("http://localhost:8080/Order");

                const products = productsResponse.data || [];
                const orders = ordersResponse.data || [];

                setTotalProducts(products.length);
                setTotalOrders(orders.length);

                if (products.length > 0) {
                    const productPrices = products.map(product => product.price);
                    setHighestProductPrice(Math.max(...productPrices));
                    setLowestProductPrice(Math.min(...productPrices));
                }

                setOrdersDelivered(orders.filter(order => order.status.toLowerCase() === 'delivered').length);
                setOrdersPending(orders.filter(order => order.status.toLowerCase() === 'pending').length);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='dashboard'>
            <h1 className='dashboard-heading'>Welcome To ERP System</h1>
            <h2 className='sub-heading'>Dashboard</h2>

            <div className='data-product row'>
                <div className='summary-item col-md-3'>
                    <p>Total Number of Products</p>
                    <h3>{totalProducts}</h3>
                </div>
                <div className='summary-item col-md-3'>
                    <p>Highest Products Price</p>
                    <h3>{highestProductPrice}</h3>
                </div>
                <div className='summary-item col-md-3'>
                    <p>Lowest Products Price</p>
                    <h3>{lowestProductPrice}</h3>
                </div>
                <div className='actions col-md-3 mt-3'>
                    <Link to="/products">
                        <button className='btn btn-primary'>Manage Products</button>
                    </Link>
                </div>
            </div>
            <div className='data-order row mt-3'>
                <div className='summary-item col-md-3'>
                    <p>Total Number of Orders</p>
                    <h3>{totalOrders}</h3>
                </div>
                <div className='summary-item col-md-3'>
                    <p>Orders Delivered </p>
                    <h3>{ordersDelivered}</h3>
                </div>
                <div className='summary-item col-md-3'>
                    <p>Orders Pending</p>
                    <h3>{ordersPending}</h3>
                </div>
                <div className='actions col-md-3 mt-3'>
                    <Link to="/orders">
                        <button className='btn btn-primary'>Manage Orders</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
