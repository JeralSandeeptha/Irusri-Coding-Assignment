import './CartPage.scss';
import { CartPageProps } from '../../types/pages';
import Navbar from '../../components/navbar/Navbar';
import CartContent from '../../components/cart-content/CartContent';
import { Helmet } from 'react-helmet';

const CartPage = (props: CartPageProps) => {
  return (
    <div className='cart'>
      <div className="cart-inner">

        <Helmet>
          <title>Shopping Cart - IruSri Products</title>
          <meta
              name="description"
              content="Review and finalize your order on the IruSri Assignment shopping cart. View your selected items, update quantities, and proceed to checkout for a smooth shopping experience."
          />
          <meta name="robots" content="noindex, follow" />
          <meta property="og:title" content="Shopping Cart - IruSri Products" />
          <meta
              property="og:description"
              content="Check your cart before completing your purchase at IruSri Assignment. Modify quantities, remove items, and continue to checkout to secure your order."
          />
          <meta property="og:type" content="website" />
        </Helmet>

        <Navbar />

        <CartContent />
      </div>
    </div>
  )
}

export default CartPage
