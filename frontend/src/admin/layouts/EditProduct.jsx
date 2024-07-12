import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './product.css'
import { Grid } from '@mui/material';

export default function EditProduct() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [product, setProduct] = useState({
        "productName": "string",
        "price": 0,
        "quantity": 0,
        "category": {
            "id": 0
        },
        "productPicture":""
    })
    useEffect(() => {
        loadUser();
      },[]);
    

    const { productName, price, quantity,productPicture } = product;
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

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(result.data);
      };
      const onSubmit = (e) => {
        e.preventDefault();
         axios.put(`http://localhost:8080/product/${id}`, product);
        navigate("/");
      };

    return (
        <Grid container justifyContent="center"  xs={12}>
        <div className="row" >
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="title">Edit Product</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-item">
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

                    <div className="form-item">
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
                    
                    {/* <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your categoryId"
                            name="categoryId"
                            value={categoryId}
                            onChange={(e) => onInputChange(e)}
                        /> */}
                    <div className="form-item">
                        <label htmlFor="category" className="form-label">
                            Category
                        </label>
                       <select  name="categoryId" value={categoryId}  onChange={(e) => onInputChange(e)}>
                                    <option value="1">Sıcak İçecek</option>
                                    <option value="2">Soguk İçecek</option>
                                    <option value="3">Pasta</option>
                                    <option value="4">Dondurma</option>
                                    <option value="5">Sandviç</option>
                                </select>
                    </div>
                    <div className="form-item">
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
                    
                    <div className="form-item">
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
                    <div className='button'>
                    <button type="submit" className="button-kaydet">Kaydet</button>
                    <Link className="button-iptal" to="/admin">
                        İptal
                    </Link>
 
                    </div>
                    </form>
                    
                    <div className='picture'>
                        <img src={product.productPicture} alt={productName} width="200" height="200" style={{borderRadius: '30%'}}/>
                    </div>
            </div>
        </div>
        </Grid>
  )
}
