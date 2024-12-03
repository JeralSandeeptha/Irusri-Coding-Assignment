import './CartContent.scss';
import { CartContentComponentPorps } from '../../types/components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import animationData from "../../assets/lotties/no-data.json";
import Lottie from 'lottie-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState, useEffect } from 'react';
import { addToCart, removeFromCart } from '../../store/slices/cartSlice';
import removeIcon from '../../assets/icons/cross.png';

const CartContent = (props: CartContentComponentPorps) => {

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const [items, setItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setItems(savedItems);

    const savedTotalPrice = localStorage.getItem('totalPrice');
    if (savedTotalPrice) {
      setTotalPrice(parseFloat(savedTotalPrice));
    }
  }, []);

  // Update localStorage whenever items or totalPrice changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));
  }, [items, totalPrice]);

  const handleIncrement = (productId: string) => {
    const updatedItems = [...items];
    const productIndex = updatedItems.findIndex(item => item.id === productId);
    if (productIndex >= 0) {
      updatedItems[productIndex].quantity += 1;
      const updatedPrice = totalPrice + updatedItems[productIndex].price;
      setItems(updatedItems);
      setTotalPrice(updatedPrice);
      dispatch(addToCart({ product: updatedItems[productIndex], quantity: 1 }));
    }
  };

  const handleDecrement = (productId: string) => {
    const updatedItems = [...items];
    const productIndex = updatedItems.findIndex(item => item.id === productId);
    if (productIndex >= 0 && updatedItems[productIndex].quantity > 1) {
      updatedItems[productIndex].quantity -= 1;
      const updatedPrice = totalPrice - updatedItems[productIndex].price;
      setItems(updatedItems);
      setTotalPrice(updatedPrice);
      dispatch(addToCart({ product: updatedItems[productIndex], quantity: -1 }));
    } else if (productIndex >= 0 && updatedItems[productIndex].quantity === 1) {
      dispatch(removeFromCart(updatedItems[productIndex]));
      updatedItems.splice(productIndex, 1); // Remove the item from the array
      setItems(updatedItems);
    }
  };

  const formattedTotalPrice = totalPrice.toFixed(2);

  function formatToTwoDecimalPlaces(input: number): number {
    const fixedPrice = input.toFixed(2);
    return fixedPrice;
  }

  const handleRemoveProduct = (productId: string) => {
    const isConfirmed = window.confirm('Are your sure want to remove this product from cart ?');
    if (isConfirmed) {
      const updatedItems = items.filter((item) => item.id !== productId); // Remove the product
      const removedProduct = items.find((item) => item.id === productId);
      const updatedPrice = removedProduct ? totalPrice - (removedProduct.price * removedProduct.quantity) : totalPrice;
  
      setItems(updatedItems); // Update state with filtered items
      setTotalPrice(updatedPrice); // Update total price
      dispatch(removeFromCart({ id: productId })); // Dispatch action to update the store
    } 
  }

  return (
    <div className='cart-content'>
      <div className='cart-content-inner'>
        <div className="cart-center">
          <div className="center-left">
            <h2 className="center-title">Your Shopping Cart</h2>
            <h5 className="center-subheader"><span>{ items.length }</span> items in your cart</h5>
          </div>
          <div className="center-right">
            <h5 className="center-right-subheader">Purchase products</h5>
          </div>
        </div>
        <hr className='hr'/>
        <div className="cart-content-products">
          <div className="cart-content-left-products">
            <div className="cart-grid">
              <div className="cart-header-section">
                <div className="one cart-header-textbox"><h5 className="cart-header-text ">Product</h5></div>
                <div className="two cart-header-textbox"><h5 className="cart-header-text">Price</h5></div>
                <div className="three cart-header-textbox"><h5 className="cart-header-text">Quantity</h5></div>
                <div className="four cart-header-textbox"><h5 className="cart-header-text">Total Price</h5></div>
              </div>
              {
                items.length !== 0 ? (
                  <div className="products">
                    {
                      items.map((product) => (
                        <>
                          <div key={product.id} className='product'>
                            <Button variant="outlined" size="small" className='remove-btn' onClick={() => handleRemoveProduct(product.id)}>
                              <img src={removeIcon} alt="close-icon" className="close-icon" />
                            </Button>
                            <div className="one">
                              <Link to={`/product/${product.id}`}>
                                <img src={product.image} alt="product-image" className="product-image" />
                              </Link>
                              <div className="product-details">
                                <div className="product-name"><h5 className="product-text">{product.name}</h5></div>
                                <div className="product-description"><h5 className="product-text">{product.description}</h5></div>
                              </div>
                            </div>
                            <div className="two">
                              <h5 className="product-text"><span>Unit Price:</span> ${formatToTwoDecimalPlaces(product.price)}</h5>
                            </div>
                            <div className="three">
                              <Button variant="outlined" size="small" className='add-btn' onClick={() => handleDecrement(product.id)}>-</Button>
                              <h5 className="product-text">{product.quantity}</h5>
                              <Button variant="outlined" size="small" className='add-btn' onClick={() => handleIncrement(product.id)}>+</Button>
                            </div>
                            <div className="four">
                              <h5 className="product-text"><span>Total Price:</span> ${product.price * product.quantity}</h5>
                            </div>
                          </div>
                          <hr className="hr" />
                        </>
                      ))
                    }
                  </div>
                ) : (
                  <div className="not-found-data">
                    <Lottie animationData={animationData} loop={true} className='anim'/>
                    <h5 className="cart-text">Your cart is empty</h5>
                    <Link to='/'>
                      <Button variant="contained" size="small" className='control-button'>Shop Products</Button>
                    </Link>
                  </div>
                )
              }
            </div>
          </div>

          <div className="cart-content-right-products">
            <div className="total-container">
              <h2 className="cart-header">Order Details</h2>
              <div className="cart-amount">
                <h5 className='amount-key'>Cart Total</h5>
                <h5 className='amount-value'>$ {formattedTotalPrice}</h5>
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
