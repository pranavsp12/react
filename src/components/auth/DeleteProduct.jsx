import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {deleteProduct} from '../../redux/actions/authAction'

const DeleteProduct = ({ deleteProduct }) => {
  const [formData, setFormData] = useState({
   productId: ""
  });
  const {
   productId
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      productId: productId
    };

    console.log(JSON.stringify(formData));
    deleteProduct(formData)
  };

  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Delete Product</h1>
            <p className="lead text-center">Delete Product</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="productId"
                  name="productId"
                  required
                  value={productId}
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

DeleteProduct.propTypes = {
  //isAuthenticated: PropTypes.bool,
  deleteProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { deleteProduct })(DeleteProduct);
