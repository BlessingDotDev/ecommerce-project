import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import { ProductsGrid } from './ProductsGrid.jsx';

import './HomePage.css';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHomeDate = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    }

    fetchHomeDate();
  }, []);

  return (
    <>
    <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <title>Ecommerce Project</title>
      
      <Header cart={cart}/>

      <div className="home-page">  
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}