import { ProductsContentComponentPorps } from '../../types/components'
import './ProductsContent.scss';
import Lottie from 'lottie-react';
import animationData from "../../assets/lotties/no-data.json";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const ProductsContent = (props: ProductsContentComponentPorps) => {
    
    const products = [
        {
            "id": 1,
            "name": "Wireless Headphones",
            "description": "High-quality wireless headphones with noise cancellation. Click the single product for more details. Thank you",
            "price": 99.99,
            "image": "https://images.unsplash.com/photo-1676315636995-a5d5df17b192?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 2,
            "name": "Gaming Mouse",
            "description": "Ergonomic gaming mouse with customizable buttons. Click the single product for more details. Thank you. This is a awesome product.",
            "price": 49.99,
            "image": "https://images.unsplash.com/photo-1632160871990-be30194885aa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 3,
            "name": "Smartwatch",
            "description": "Feature-packed smartwatch with heart rate monitoring. Click the single product for more details. Thank you. This is a awesome product.",
            "price": 149.99,
            "image": "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 4,
            "name": "Portable Charger",
            "description": "Compact 10000mAh portable charger for your devices. Click the single product for more details. Thank you. This is a awesome product.",
            "price": 29.99,
            "image": "https://images.unsplash.com/photo-1706275787516-75a9b7ca7247?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id": 5,
            "name": "4K Monitor",
            "description": "27-inch 4K UHD monitor with vibrant colors. Click the single product for more details. Thank you. This is a awesome product.",
            "price": 399.99,
            "image": "https://images.unsplash.com/photo-1527800792452-506aacb2101f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    
    return (
        <div className='products-content'>
        <div className="products-content-inner">
            
            <div className="products-upper">
                
            </div>

            <hr className='hr'/>

            <div className="products-center">
                <div className="center-left">
                    <h2 className="center-title">Products Catelog</h2>
                    <h5 className="center-subheader">We found <span>242</span> products</h5>
                </div>
                <div className="center-right">
                    <h5 className="center-right-subheader">Sort products</h5>
                </div>
            </div>
            
            <div className="products-lower">
                {
                    products.length !== 0 ? (
                        <div className='products-section'>
                            {
                                products.map((product) => {
                                    return (
                                        <div key={product.id} className="product">
                                            <Link to={`/product/${product.id}`}>
                                                <img src={product.image} alt="product-image" className='product-image'/>
                                            </Link>
                                            <div className="product-content">
                                                <div className="product-upper">
                                                    <h4 className="name">{product.name}</h4>
                                                    <h4 className="price">${product.price}</h4>
                                                </div>
                                                <div className="product-center">
                                                    <h6 className='description'>{product.description}</h6>
                                                </div>
                                                <div className="product-lower">
                                                    <div className="add-cart-buttons-section">
                                                        <Button variant="outlined" size="small" className='add-btn'>-</Button>
                                                        <h5 className='add-btn'>18</h5>
                                                        <Button variant="outlined" size="small" className='add-btn'>+</Button>
                                                    </div>
                                                    <div className="add-cart-button-section">
                                                        <Button variant="contained" size="small" className='add-btn'>Add cart</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div className="not-found-data">
                            <Lottie animationData={animationData} loop={true} className='anim'/>
                        </div>
                    )
                }
            </div>
            
        </div>
        </div>
    );
  
}

export default ProductsContent;
