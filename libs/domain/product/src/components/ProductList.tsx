import React from 'react';
import { useProduct } from '../hooks/useProduct';

export const ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useProduct();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products?.map((product: any) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
