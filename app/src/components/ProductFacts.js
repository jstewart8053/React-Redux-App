import React from "react";
import { connect } from "react-redux";
import Product from "./Product";

function ProductFacts(props) {
    return (
        <>
            <h3> Product Facts </h3>

            {props.facts.map((fact) => {
                return <Product key={fact._id} product={product} />;
            })}
        </>
    );
}

function mapStateToProps(state) {
    return {
        facts: state.facts
    };
}

export default connect(mapStateToProps, {})(ProductFacts);
