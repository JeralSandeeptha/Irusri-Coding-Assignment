import './ProductsPage.scss';
import { ProductsPageProps } from '../../types/pages';
import Navbar from '../../components/navbar/Navbar';
import ProductsContent from '../../components/products-content/ProductsContent';
import { Helmet } from 'react-helmet';

const ProductsPage = (props: ProductsPageProps) => {
  return (
    <div className='products'>

      <Helmet>
        <title>Explore Products - IruSri Products</title>
        <meta
            name="description"
            content="Browse our wide selection of products at IruSri Assignment. Find the perfect items for your needs, with detailed descriptions, reviews, and competitive prices."
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Login - IruSri Assignment" />
        <meta
            property="og:description"
            content="Explore IruSri Assignment’s extensive product catalog. Shop by category, view detailed product information, and find the best deals for all your needs."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ProductsContent />
    </div>
  )
}

export default ProductsPage
