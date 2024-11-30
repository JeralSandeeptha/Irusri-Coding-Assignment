import './ProductsPage.scss';
import { ProductsPageProps } from '../../types/pages';
import Navbar from '../../components/navbar/Navbar';
import ProductsContent from '../../components/products-content/ProductsContent';

const ProductsPage = (props: ProductsPageProps) => {
  return (
    <div className='products'>
      <Navbar />
      <ProductsContent />
    </div>
  )
}

export default ProductsPage
