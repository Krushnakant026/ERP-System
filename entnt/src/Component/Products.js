import React, { useState, useEffect } from 'react';
import '../Component/Product.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:8080/Product").then((res) => {
            console.log(res.data);
            setProduct(res.data);
        }).catch((err) => { })
    }

    const deleteRecord = (id) => {
        if (window.confirm(`Are You Sure to delete data of : ${id}`)) {
            axios.delete(`http://localhost:8080/Product/${id}`).then(() => {
                window.alert("Product Delete Successfully")
                fetchData();
            }).catch((err) => { })

        }
    }

    return (
        <div className="product">
            <h2>Products Management</h2>
            <Link to="/AddProduct">
                <button className="btn btn-success">Add Product</button>
            </Link>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {product.map((val, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.category}</td>
                            <td>{val.price}</td>
                            <td>{val.stock}</td>
                            <td>
                                <Link to={`/EditProduct/${val.id}`}>
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

export default Products;
