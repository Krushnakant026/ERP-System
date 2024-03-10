import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Component/AddProduct.css'


const AddProduct = () => {
    const nav = useNavigate();

    const [item, setItem] = useState({
        name: "",
        category: "",
        price: "",
        stock: ""
    });



    const inputChangeHandler = (event) => {
        const { type, name, value } = event.target;
        setItem({ ...item, [name]: value });
    }

    //this is add request
    const addProduct = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/Product/", item).then(() => {
            window.alert("Product Added Successfully");
            nav("/products");
        }).catch((err) => { })
        console.log(item)
    }


    return (
        <div className="container" >
            <h4>Fill the Data to Add Product in List</h4>
            <form onSubmit={addProduct} className='form'>
                <div className="form-group">
                     <input type="text" className="form-control mt-3" name="name" placeholder='Enter Product Name' value={item.name} onChange={inputChangeHandler}></input>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control mt-3" name="category" placeholder='Enter Category' value={item.category} onChange={inputChangeHandler}></input>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control mt-3" name="price" placeholder='Enter Price' value={item.price} onChange={inputChangeHandler}></input>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control mt-3" name="stock" value={item.stock} placeholder='Enter Stock Quantity' onChange={inputChangeHandler}></input>
                </div>
                <div className='button1'>
                    <button type="submit" className="btn btn-primary mt-2" onClick={addProduct}>Add Product</button>
                </div>

            </form>
        </div>
    )
}

export default AddProduct;