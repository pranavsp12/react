import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addPrice} from '../../redux/actions/authAction'

const AddPrice = ({ addPrice}) => {
  const [formData, setFormData] = useState({
    priceId:"", 
    productId:"", 
    priceValue:""
  });
  const {
    priceId,
    productId,
    priceValue,
    
  } = formData;
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
    addPrice(formData)
  };

  return (
    <div className="price">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Create Price</h1>
            <p className="lead text-center">Add Price</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Price Id"
                  name="priceId"
                  required
                  value={priceId}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Product Id "
                  name="productId"
                  value={productId}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="priceValue"
                  name="priceValue"
                  value={priceValue}
                  onChange={onChange}
                />
              </div>
             
              <input type="submit" className= "btn btn-info btn-block mt-4"  />
             
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

AddPrice.propTypes = {
  //isAuthenticated: PropTypes.bool,
  addPrice: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { addPrice })(AddPrice);