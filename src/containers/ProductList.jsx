import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products';


const ProductList = () => {
	const products = useGetProducts(API)
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (// lo que hace es impirmir el product item que tenemos por la cantidas de items que hay en la API
					<ProductItem product = {product} key = {product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;