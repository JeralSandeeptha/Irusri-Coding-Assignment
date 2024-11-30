import './CartContent.scss';
import { CartContentComponentPorps } from '../../types/components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import animationData from "../../assets/lotties/no-data.json";
import Lottie from 'lottie-react';

const CartContent = (props: CartContentComponentPorps) => {

  const products: any[] = [
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
    
  return (
    <div className='cart-content'>
      <div className='cart-content-inner'>
        
        <div className="cart-center">
            <div className="center-left">
                <h2 className="center-title">Your Shopping Cart</h2>
                <h5 className="center-subheader"><span>242</span> items in your cart</h5>
            </div>
            <div className="center-right">
                <h5 className="center-right-subheader">Purchase products</h5>
            </div>
        </div>
        
        <hr className='hr'/>

        <div className="cart-content-products">

          <div className="cart-content-left-products">
            {
              products.length !== 0 ? (
                <div className="products">
                  {
                    products.map((product) => {
                      return (
                        <div className='product'>{product.name}</div>
                      )
                    })
                  }
                </div>
              ) : (
                <div className="not-found-data">
                    <Lottie animationData={animationData} loop={true} className='anim'/>
                    <h5 className="cart-text">Your cart is empty</h5>
                    <Link to='/products'>
                      <Button variant="contained" size="small" className='control-button'>Shop Products</Button>
                    </Link>
                </div>
              )
            }
          </div>

          <div className="cart-content-right-products">
            <div className="total-container">
              <h2 className="cart-header">Order Details</h2>
              <div className="cart-amount">
                <h5 className='amount-key'>Cart Total</h5>
                <h5 className='amount-value'>$67.50</h5>
              </div>
              <Button variant="contained" size="small" className='control-button'>Confirm Order</Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );

}

export default CartContent;
