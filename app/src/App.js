import React, { useEffect } from "react";
import "./styles.css";
import ProductFacts from "./components/ProductFacts";
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
      <h2> Where you can easily find ratings for the most anticipated beverages from your favorite eateries </h2>
      {!loadingProducts ? <ProductFacts /> : <div>... Fetching Product Facts </div>}
      {errorMessage !== "" ? <div> {errorMessage} </div> : null}
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
