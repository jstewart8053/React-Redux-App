import React from "react";
import { connect } from "react-redux";
import Product from "./Product";

function ProductFacts(props) {
    reutrn(
        <>
            <h3> Product Facts </h3>

            {props.facts.map((fact) => {
                return <Fact key={fact._id} fact={fact} />;
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
