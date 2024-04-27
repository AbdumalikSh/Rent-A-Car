import styles from "./CarProducts.module.css";

const CarProducts = ({ filterResult }) => {
  return (
    <>
      <section className={styles.card_container}>{filterResult}</section>
    </>
  );
};

export default CarProducts;
