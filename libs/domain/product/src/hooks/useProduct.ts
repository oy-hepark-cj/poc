import { useQuery } from '@tanstack/react-query';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  // This is a mock implementation. Replace with actual API call
  return [
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description 2' },
  ];
};

export const useProduct = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
