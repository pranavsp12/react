import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updatePrice1 } from "../../redux/actions/authAction";
const UpdatePrice1 = ({ updatePrice1 }) => {
  const [formData, setFormData] = useState({
    priceId:"",
    productId: "",
    priceValue:"",
  });
  const { priceId, productId, priceValue} = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      priceId: priceId,
      productId: productId,
      priceValue: priceValue
    };

    console.log(JSON.stringify(formData));
    updatePrice1(formData)
  };

  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Update Price</h1>
            <p className="lead text-center">Update Price</p>
            <form onSubmit={onSubmit}>
            
            <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="PriceId"
                  name="priceId"
                  value={priceId}
                  onChange={onChange}
                />
              </div>
            <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="ProductId"
                  name="productId"
                  value={productId}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="priceValue " 
                  name="priceValue"
                  value={priceValue}
                  onChange={onChange}
                />
              
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

UpdatePrice1.propTypes = {
  //isAuthenticated: PropTypes.bool.isRequired,
  updatePrice1: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { updatePrice1 })(UpdatePrice1);