import React, { useState } from "react";
import CarNavigation from "../../components/CarNavigation/CarNavigation";
import CarProducts from "../../components/CarProducts/CarProducts";
import CarRecommended from "../../components/CarRecommended/CarRecommended";
import CarSidebar from "../../components/CarSidebar/CarSidebar/CarSidebar";
import products from "../../db/carData";
import CarCard from "../../components/CarCard/CarCard";
import CarPagination from "../../components/Pagination/Pagination";
import styles from "./Cars.module.css";
import Nav from "../../components/NavBar/Nav";
import Footer from "../../components/Footer/Footer";

const Cars = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [prodPrice, setProdPrice] = useState([0, 1000]);
  const [page, setPage] = useState(1)
  const prodPerPage = 6

  const handleInputChange = (event) => {
    setInputSearch(event.target.value);
    setPage(1)
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1)
  };

  const handlePriceChange = (event) => {
    setProdPrice(event.target.value);
    setPage(1)
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1)
  };

  function filteredData(products, selected, query, prodPrice) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    if (selected && selected !== "Все") {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, price, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          price === selected ||
          title === selected
      );
    }
    filteredProducts = filteredProducts.filter(
      ({ price }) => price >= prodPrice[0] && price <= prodPrice[1]
    );

    return filteredProducts.map(({ id, img, title, reviews, price }) => (
      <CarCard
        key={id}
        img={img}
        title={title}
        reviews={reviews}
        price={price}
      />
    ));
  }

  const filterResult = filteredData(products, selectedCategory, inputSearch, prodPrice);

  const indexOfLastProd = page * prodPerPage;
  const indexOfFirstProd = indexOfLastProd - prodPerPage
  const currentProd = filterResult.slice(indexOfFirstProd, indexOfLastProd)
  const paginate = (pageNumber) => setPage(pageNumber)

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <CarSidebar handleChange={handleChange} handlePriceChange = {handlePriceChange} />
        <div className={styles.card_container}>
          <div className={styles.nav_recom}>
            <CarNavigation
              inputSearch={inputSearch}
              handleInputChange={handleInputChange}
            />
            <CarRecommended handleClick={handleClick} />
          </div>
          <CarProducts filterResult={currentProd} />
          <CarPagination 
            prodPerPage = {prodPerPage}
            totalProd = {filterResult.length}
            paginate = {paginate}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cars;
