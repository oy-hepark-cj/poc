import { SharedHeader } from "@poc/ui";
import { ProductList } from "@domain/product";

const Product = () => {
  return (<main><SharedHeader />상품 페이지
  <ul>
    <li>libs/domain/product React: 18.2.0</li>
    <li>libs/domain/product @tanstack/react-query: 5.0.0</li>
    </ul>
    <ProductList />
    </main>)
}

export default Product;