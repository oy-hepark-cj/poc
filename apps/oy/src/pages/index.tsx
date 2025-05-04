import { Routes, Route, Link } from 'react-router-dom';
import Product from './product';
import Wellness from './wellness';
import styles from './index.module.scss';
import HOME_IMAGE from '../../public/wellness/main.jpg';
import PRODUCT_IMAGE from '../../public/product/main.png';
import Image from 'next/image';

export function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wellness" element={<Wellness />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

const Home = () => {
  return (<main>
    <h1 style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold'}}>oy home</h1>
    <ul>
      <li>apps/oy React: 19.0.0</li>
      <li>apps/oy @tanstack/react-query: 5.0.0</li>
    </ul>
    <div className={styles.container}>
      <Link className={styles.link} to="/wellness"><Image src={HOME_IMAGE} alt="wellness" width={400} height={296} /><br />웰니스 보기</Link>
      <Link className={styles.link} to="/product"><Image src={PRODUCT_IMAGE} alt="wellness" width={400} /><br/>상품 보기</Link>
    </div>
  </main>)
}

export default Index;
