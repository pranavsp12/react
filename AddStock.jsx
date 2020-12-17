import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addStock} from '../../redux/actions/authAction'

const AddStock = ({ addStock }) => {
  const [formData, setFormData] = useState({
    stockId: "",
    productId: "",
    location: "",
    quantity: "",
  });
  const {
    stockId,
    productId,
    location,
    quantity,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      stockId: stockId,
      productId: productId,
      quantity: quantity,
      location: location,
    };

    console.log(JSON.stringify(formData));
    addStock(formData)
  };

  return (
    <div className="stock">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Create Stock</h1>
            <p className="lead text-center">Add Stock</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Stock Id"
                  name="stockid"
                  required
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
                  name="location"
                  value={location}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Quantity"
                  name="quantity"
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

AddStock.propTypes = {
  //isAuthenticated: PropTypes.bool,
  addStock: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { addStock })(AddStock);
