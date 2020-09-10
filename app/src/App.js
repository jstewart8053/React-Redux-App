import React, { useEffect } from "react";
import "./styles.css";
import Product from "./components/Product";
import { connect } from "react-redux";
import { fetchProducts } from "./store/actions"


function App({ fetchProducts, loadingProducts, errorMessage }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])


  return (
    <div className='App'>
      <h1>
        Welcome to Report of the Week!
      <span> 📈 </span>
      </h1>
      <h2> Where we will be introducing and reviewing the most anticipated beverages </h2>
      <span> 🥤 </span>
    </div>
  )

}


function mapStateToProps(state) {
  return {
    loadingProducts: state.Products,
    errorMessage: state.errorMessage
  };
}
export default connect(mapStateToProps, { fetchProducts })(App);
