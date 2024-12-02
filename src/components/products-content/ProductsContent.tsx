import { ProductsContentComponentPorps } from '../../types/components'
import './ProductsContent.scss';
import Lottie from 'lottie-react';
import animationData from "../../assets/lotties/no-data.json";
import { Link } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import filterIcon from '../../assets/icons/settings-sliders.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { Product } from '../../types/models';
import { RootState } from '../../store/store';
import getAllProducts from '../../services/product-service/getAllProducts';

const ProductsContent = (props: ProductsContentComponentPorps) => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    const [products, setProducts] = useState<Product[]>([]);

    // State for product quantities
    const [quantities, setQuantities] = useState<{ [key: number]: number }>(
        products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
    );

    // Increment quantity
    const handleIncrement = (id: number) => {
        setQuantities((prev) => ({ ...prev, [id]: prev[id] ? prev[id] + 1 : 1 })); // Handle initial undefined value
    };

    // Decrement quantity
    const handleDecrement = (id: number) => {
        setQuantities((prev: any) => ({
            ...prev,
            [id]: Math.max(0, prev[id] - 1), // Prevent negative quantities
        }));
    };

    // Add to cart action
    const handleAddToCart = (id: number, product: Product) => {
        const quantity = quantities[id];
        console.log(quantity);
        if(isLoggedIn) {
            if(quantity !== undefined && quantity !== 0) {
                console.log(`Adding product ID ${id} with quantity ${quantity} to the cart`);
                dispatch(addToCart({ product, quantity }));
                alert(`Successfully added  ${product.name} with ${quantity} items to the cart`);
            } else {
                alert('Please put atleast one item');
            }
        } else {
            alert('Please log in to your account before add products to the cart');
        }
    };

    const getProducts = async () => {
        await getAllProducts({
            setProducts: setProducts
        });
    }

    useEffect(() => {
        getProducts();
    }, []);
    
    return (
        <div className='products-content'>
        <div className="products-content-inner">

            <div className="products-center">
                <div className="center-left">
                    <h2 className="center-title">Products Catelog</h2>
                    <h5 className="center-subheader">We found <span>{products.length}</span> products</h5>
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
                                                        <h5 className='add-btn'>{quantities[product.id] || 0}</h5>
                                                        <Button variant="outlined" size="small" className='add-btn' onClick={() => {
                                                            handleIncrement(product.id);
                                                        }}>+</Button>
                                                    </div>
                                                    <div className="add-cart-button-section">
                                                        <Button variant="contained" size="small" className='add-btn' onClick={() => {
                                                            handleAddToCart(product.id, product);
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
