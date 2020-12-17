import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStock } from "../../redux/actions/authAction";
const UpdateStock = ({ updateStock }) => {
  const [formData, setFormData] = useState({
    stockId: "",
    productId: "",
    location: "",
    quantity: "",
  });
  const { stockId, productId, location, quantity} = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
        stockId: stockId,
        productId: productId,
        loaction: location,
        quantity: quantity,
    };

    console.log(JSON.stringify(formData));
    updateStock(formData)
  };

  return (
    <div className="stock">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Update Stock</h1>
            <p className="lead text-center">Update Stock</p>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Stock Id"
                  name="stockId"
                  value={stockId}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Product Id"
                  name="productId"
                  value={productId}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Location"
                  name="loaction"
                  value={location}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Quantity"
                  name="quamtity"
                  value={quantity}
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

UpdateStock.propTypes = {
  //isAuthenticated: PropTypes.bool.isRequired,
  updateStock: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { updateStock })(UpdateStock);
