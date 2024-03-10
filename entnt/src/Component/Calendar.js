import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar1 from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Component/Calender.css';
import { Link } from 'react-router-dom';


const Calendar = () => {
    const [orders, setOrders] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        axios.get("http://localhost:8080/Order")
            .then(response => {
                setOrders(response.data || []);
            })
            .catch(error => {
                console.error('Error fetching orders data:', error);
            });
    }, []);

    const ordersOnSelectedDate = orders.filter(order => {
        const deliveryDate = new Date(order.deliveryDate);
       
        return deliveryDate.toDateString() === selectedDate.toDateString();
    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <div className="calender">
            <h2 className='h mt-3'> Welcome To ERP System</h2>
            <h2 className='mt-3'>Orders Calendar View</h2>
            <div className="calendar-box mt-3">
                <Calendar1
                    name="date"
                    onChange={handleDateChange}
                    value={selectedDate}
                />
            </div>
            <div className='mt-3'>
                <h3>Orders Due for Delivery on {selectedDate.toDateString()}:</h3>
                <table className='table mt-3'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Order Date</th>
                        <th>Delivery Date</th>
                    </tr>
                </thead>
                <tbody>
                {ordersOnSelectedDate.map(order => (
                        <tr>
                        <td>{order.id}</td>
                        <td>{order.cname}</td>
                        <td>{order.status}</td>
                        <td>{order.orderDate}</td>
                        <td>{order.deliveryDate}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>

            <Link to="/orders">
                <button className='mt-3 btn btn-primary mt-3' >Close Calendar</button>
            </Link>
        </div>
    );
};

export default Calendar;
