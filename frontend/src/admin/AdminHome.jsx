import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';

export default function AdminHome() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = async () => {
        const result = await axios.get('http://localhost:8080/product/getAll');
        setProducts(result.data);
    }

    const deleteProducts = async (id) => {
        await axios.delete(`http://localhost:8080/product/${id}`)
        loadProducts()
    }

    return (
        <div>
            <div className='panel'>
                <button className='panel-list'>Products</button>
                <button className='panel-list' onClick={()=>navigate("/order")}>Orders</button>
            </div>
            
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>İndex</th>
                        <th>Ürün Adı</th>
                        <th>Fiyat</th>
                        <th>Kategori</th>
                        <th>Miktar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr>
                            <th scope="row" key={index}>{index + 1}</th>
                            <td>{product.productName}</td>
                            <td>{product.price + "₺"}</td>
                            <td>{product.category.categoryName}</td>
                            <td>{product.quantity}</td>

                            <button className='button button-edit'>
                                <Link className='link'
                                    to={`/editproduct/${product.id}`}>
                                    Edit </Link>
                            </button>

                            <button className='button button-delete'
                                onClick={() => deleteProducts(product.id)}
                            >Delete</button>

                        </tr>
                    ))}
                </tbody>


                <button >
                    <a href='/AddProduct' className='link'>
                        Ekle</a>
                </button>


            </table>
        </div>

    )
}
