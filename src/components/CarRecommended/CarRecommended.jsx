import CarBtn from "../CarBtn/CarBtn";
import styles from "./CarRecommended.module.css";

const CarRecommended = ({ handleClick }) => {
  return (
    <div>
      <h2 className={styles.recom_title}>Рекомендации</h2>
      <div className={styles.recom_flex}>
        <CarBtn onClickHandle={handleClick} value="" title="Все Машины"/>
        <CarBtn onClickHandle={handleClick} value="Audi" title="Audi" />
        <CarBtn onClickHandle={handleClick} value="BMW" title="BMW" />
        <CarBtn onClickHandle={handleClick} value="Dodge" title="Dodge" />
        <CarBtn onClickHandle={handleClick} value="Mercedes" title="Mercedes" />
        <CarBtn
          onClickHandle={handleClick}
          value="Range-Rover"
          title="Range-Rover"
        />
        <CarBtn onClickHandle={handleClick} value="Tesla" title="Tesla" />
        <CarBtn onClickHandle={handleClick} value="Toyota" title="Toyota" />
      </div>
    </div>
  );
};

export default CarRecommended;
