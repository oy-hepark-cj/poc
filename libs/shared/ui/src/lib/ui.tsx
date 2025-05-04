import styles from './ui.module.css';

export function SharedHeader() {
  return (
    <div className={styles.header}>
      <h1>공통 헤더 by Shared </h1>
    </div>
  );
}

export default SharedHeader;
