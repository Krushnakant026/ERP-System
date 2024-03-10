import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../Component/AddProduct.css'

const EditOrder = () => {

    const { id } = useParams();
    const nav = useNavigate();

    const [item, setItem] = useState({
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/Order/${id}`).then((res) => {
            //console.log(res.data)   
            setItem(res.data)
        }).catch((err) => { })
    }, [id])

    const inputChangeHandler = (event) => {
        const { type, name, value } = event.target;
        setItem({ ...item, [name]: value });
    }

    const editOrder = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/Order/${id}`, item).then(() => {
            window.alert("Order Updated Successfully");
            nav("/orders");
        }).catch((err) => { })
        console.log(item)
    }


    return (
        <div className="container">
            <h2>Edit Order</h2>
            <form onSubmit={editOrder} className="form">
                <div className="form-group">
                    <label className="label-form">Name</label>
                    <input type="text" className="form-control" name="cname" value={item.cname} onChange={inputChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label className="label-form">Order Date</label>
                    <input type="date" className="form-control" name="orderDate" value={item.orderDate} onChange={inputChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label className="label-form">Status</label>
                    <input type="text" className="form-control" name="status" value={item.status} onChange={inputChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label className="label-form">Delivery Date</label>
                    <input type="date" className="form-control" name="deliveryDate" value={item.deliveryDate} onChange={inputChangeHandler}></input>
                </div>
                <div className="button1">
                    <button type="submit" className="btn btn-primary mt-2">Edit Order</button>
                </div>

            </form>
        </div>
    )
}

export default EditOrder
