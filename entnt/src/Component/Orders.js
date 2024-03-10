import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Component/Order.css'


const Orders = () => {

    const [order, setOrder] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8080/Order").then((res) => {
            console.log(res.data);
            setOrder(res.data);
        }).catch((err) => { })
    }

    const deleteRecord = (id) => {
        if (window.confirm(`Are You Sure to delete data of : ${id}`)) {
            axios.delete(`http://localhost:8080/Order/${id}`).then(() => {
                window.alert("Order Delete Successfully")
                fetchData();
            }).catch((err) => { })

        }
    }

    const calendarButton = () => {
        setShowCalendar(true);
    };


    return (
        <div className="orders">
            <h2>Order Management</h2>
            <Link to={"/calendar"}>
                <button className='btn btn-success' onClick={calendarButton}>Calendar</button>
            </Link>
            <table className="table table-bordered " >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Delivery Date</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {order.map((val, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val.id}</td>
                            <td>{val.cname}</td>
                            <td>{val.orderDate}</td>
                            <td>{val.status}</td>
                            <td>{val.deliveryDate}</td>
                            <td>
                                <Link to={`/EditOrder/${val.id}`}>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                                &nbsp;&nbsp;
                                <button className="btn btn-danger" onClick={() => deleteRecord(val.id)}>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
