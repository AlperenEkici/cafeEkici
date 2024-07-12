import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './product.css'
import { Grid } from '@mui/material';

export default function AddProduct() {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        "productName": "string",
        "price": 0,
        "quantity": 0,
        "category": {
            "id": 0
        },
        "productPicture": " "
    })

    const { productName, price, quantity, productPicture } = product;
    const categoryId = product.category.id;

    const onInputChange = (e) => {

        if ([e.target.name] == "categoryId") {
            setProduct({
                ...product, "category": {
                    "id": e.target.value
                }
            })
        }
        else {
            setProduct({ ...product, [e.target.name]: e.target.value });
        }


    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/product/add", product)
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err))
        navigate("/admin")
    };



    return (
        <Grid container justifyContent="center" xs={12}>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Product</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Name </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="productName"
                                value={productName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">
                                Price
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your price"
                                name="price"
                                value={price}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">
                                CategoryId
                            </label>
                            <select name="categoryId" value={categoryId} onChange={(e) => onInputChange(e)}>
                                <option value="1">Sıcak İçecek</option>
                                <option value="2">Soguk İçecek</option>
                                <option value="3">Pasta</option>
                                <option value="4">Dondurma</option>
                                <option value="5">Sandviç</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">
                                Quantity
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your quantity"
                                name="quantity"
                                value={quantity}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productPicture" className="form-label">
                                Picture(url)
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your picture url"
                                name="productPicture"
                                value={productPicture}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <Link className="btn btn-outline-danger mx-2" to="/admin">
                            Cancel
                        </Link>
                    </form>
                    <div className='picture'>
                        <img src={product.productPicture} alt={productName} width="200" height="200" style={{ borderRadius: '30%' }} />
                    </div>
                </div>
            </div>
        </Grid>
    );
}