import React from 'react'
import './ProductsPage.scss';
import { ProductsPageProps } from '../../types/pages';
import Navbar from '../../components/navbar/Navbar';

const ProductsPage = (props: ProductsPageProps) => {
  return (
    <div className='products'>
      <Navbar />
    </div>
  )
}

export default ProductsPage
