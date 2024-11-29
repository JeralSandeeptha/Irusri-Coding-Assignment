import './CartPage.scss';
import { CartPageProps } from '../../types/pages';
import Navbar from '../../components/navbar/Navbar';

const CartPage = (props: CartPageProps) => {
  return (
    <div className='cart'>
      <div className="cart-inner">
        <Navbar />
      </div>
    </div>
  )
}

export default CartPage
