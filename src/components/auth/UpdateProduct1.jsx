import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateProduct1 } from "../../redux/actions/authAction";
const UpdateProduct1 = ({ updateProduct1 }) => {
  const [formData, setFormData] = useState({
    productId: "",
    productName: "",
    category: "",
    description: "",
    expiryDate: "",
  });
  const { productId, productName, category, description, expiryDate } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      productId: productId,
      productName: productName,
      category: category,
      description: description,
      expiryDate: expiryDate,
    };

    console.log(JSON.stringify(formData));
    updateProduct1(formData)
  };

  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Update Product</h1>
            <p className="lead text-center">Update Product</p>
            <form onSubmit={onSubmit}>
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
                  placeholder="Product Name"
                  name="productName"
                  value={productName}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Category"
                  name="category"
                  value={category}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  placeholder="Expiry Date"
                  name="expiryDate"
                  value={expiryDate}
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

UpdateProduct1.propTypes = {
  //isAuthenticated: PropTypes.bool.isRequired,
  updateProduct1: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { updateProduct1 })(UpdateProduct1);