import React from 'react';
import '../styles/ProductDetail.scss';
import ProductInfo from '../components/ProductInfo';

import IconsCloses from '@icons/icon_close.png'

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
        <div className="ProductDetail-close">
          <img src={IconsCloses} alt="close" />
        </div>
        <ProductInfo />
      </aside>
    );
}

export default ProductDetail;