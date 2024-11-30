import './CartPage.scss';
import { CartPageProps } from '../../types/pages';
import Navbar from '../../components/navbar/Navbar';
import CartContent from '../../components/cart-content/CartContent';

const CartPage = (props: CartPageProps) => {
  return (
    <div className='cart'>
      <div className="cart-inner">
        <Navbar />

        <CartContent />
      </div>
    </div>
  )
}

export default CartPage
