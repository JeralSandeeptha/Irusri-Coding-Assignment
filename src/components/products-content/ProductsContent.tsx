import { ProductsContentComponentPorps } from '../../types/components'
import './ProductsContent.scss';
import Lottie from 'lottie-react';
import animationData from "../../assets/lotties/no-data.json";
import { Link } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import filterIcon from '../../assets/icons/settings-sliders.png';

const ProductsContent = (props: ProductsContentComponentPorps) => {
    
    const products = [
        {
            "id": 1,
            "name": "Wireless Headphones",
            "description": "High-quality wireless headphones with noise cancellation. Click the single product for more details. Thank you. This is a awesome product.",
            "price": 99.99,
            "image": "https://images.unsplash.com/photo-1676315636995-a5d5df17b192?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "category":"earphone"
        },
        {
            "id": 2,
            "name": "Gaming Mouse",
            "description": "Ergonomic gaming mouse with customizable buttons. Click the single product for more details. Thank you. This is a awesome product.",
            "price": 49.99,
            "image": "https://images.unsplash.com/photo-1632160871990-be30194885aa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "category":"mouse"
        },
        {
            "id": 3,
            "name": "Smartwatch",
            "description": "Feature-packed smartwatch with heart rate monitoring. Click the single product for more details. Thank you. This is a awesome product.",
            "price": 149.99,
            "image": "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "category":"watch"
        },
        {
            "id": 4,
            "name": "Portable Charger",
            "description": "Compact 10000mAh portable charger for your devices. Click the single product for more details. Thank you. This is a awesome product.",
            "price": 29.99,
            "image": "https://images.unsplash.com/photo-1706275787516-75a9b7ca7247?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "category":"chargers"
        },
        {
            "id": 5,
            "name": "4K Monitor",
            "description": "27-inch 4K UHD monitor with vibrant colors. Click the single product for more details. Thank you. This is a awesome product.",
            "price": 399.99,
            "image": "https://images.unsplash.com/photo-1527800792452-506aacb2101f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "category":"monitors"
        }
    ]

    // State for product quantities
    const [quantities, setQuantities] = useState<{ [key: number]: number }>(
        products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
    );

    // Increment quantity
    const handleIncrement = (id: number) => {
        setQuantities((prev: any) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    // Decrement quantity
    const handleDecrement = (id: number) => {
        setQuantities((prev: any) => ({
            ...prev,
            [id]: Math.max(0, prev[id] - 1), // Prevent negative quantities
        }));
    };

    // Add to cart action
    const handleAddToCart = (id: number) => {
        const quantity = quantities[id];
        console.log(`Adding product ID ${id} with quantity ${quantity} to the cart`);
        // Perform the Add to Cart logic here
    };
    
    return (
        <div className='products-content'>
        <div className="products-content-inner">

            <div className="products-center">
                <div className="center-left">
                    <h2 className="center-title">Products Catelog</h2>
                    <h5 className="center-subheader">We found <span>242</span> products</h5>
                </div>
                <div className="center-right">
                    <h5 className="center-right-subheader">Explore products</h5>
                </div>
            </div>

            <hr className='hr'/>

            <div className="products-upper">
                <div className="search-fields">
                    <div className="field">
                        <h5 className="lable">Looking for</h5>
                        <TextField
                            label="Search product name"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            className="text-field"
                        />
                    </div>
                    <div className="field">
                        <h5 className="lable">Category</h5>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            defaultValue="EUR"
                            size="small"
                        >
                            {products.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="field">
                        <h5 className="lable">Price</h5>
                        <TextField
                            id="outlined-select-currency"
                            select
                            size="small"
                            label="Select"
                            defaultValue="EUR"
                        >
                            {products.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>
                <div className="filter">
                    <div className="filter-container">
                        <img src={filterIcon} alt="filter-icon" className="icon"/>
                        <h5 className="filter-text">Filter</h5>
                    </div>
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
                                                        <Button variant="outlined" size="small" className='add-btn' onClick={() => {
                                                            handleDecrement(product.id);
                                                        }}>-</Button>
                                                        <h5 className='add-btn'>{quantities[product.id]}</h5>
                                                        <Button variant="outlined" size="small" className='add-btn' onClick={() => {
                                                            handleIncrement(product.id);
                                                        }}>+</Button>
                                                    </div>
                                                    <div className="add-cart-button-section">
                                                        <Button variant="contained" size="small" className='add-btn' onClick={() => {
                                                            handleAddToCart(product.id);
                                                        }}>Add cart</Button>
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
