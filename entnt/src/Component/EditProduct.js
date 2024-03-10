import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../Component/AddProduct.css'

const EditProduct = () => {

    const { id } = useParams();
    const nav = useNavigate();

    const [item, setItem] = useState({
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/Product/${id}`).then((res) => {
            //console.log(res.data)   
            setItem(res.data)
        }).catch((err) => { })
    }, [id])

    const inputChangeHandler = (event) => {
        const { type, name, value } = event.target;
        setItem({ ...item, [name]: value });
    }

    const addProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/Product/${id}`, item).then(() => {
            window.alert("Product Updated Successfully");
            nav("/products");
        }).catch((err) => { })
        console.log(item)
    }

    return (
        <div className="container" >
            <h2>Edit Product</h2>
            <form onSubmit={addProduct} className="form">
                <div className="form-group">
                    <label className="label-form">Name</label>
                    <input type="text" className="form-control" name="name" value={item.name} onChange={inputChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label className="label-form">Category</label>
                    <input type="text" className="form-control" name="category" value={item.category} onChange={inputChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label className="label-form">Price</label>
                    <input type="text" className="form-control" name="price" value={item.price} onChange={inputChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label className="label-form">Stock Quantity</label>
                    <input type="text" className="form-control" name="stock" value={item.stock} onChange={inputChangeHandler}></input>
                </div>
                <div className='button1'>
                    <button type="submit" className="btn btn-primary mt-2">Update Product</button>
                </div>

            </form>
        </div>
    )
}

export default EditProduct
