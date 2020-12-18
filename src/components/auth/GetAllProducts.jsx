/** 

import React, { Component, useState} from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {getallProducts} from '../../redux/reducers/authAction'
import { Link } from "react-router-dom";

const GetAllProducts = ({ getallProducts }) => {
  const [formData, setFormData] = useState({
  });
  const {
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
    };

    console.log(JSON.stringify(formData));
    getallProducts(formData)
  };

  return (
    <div className="getallproducts">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Get All Products</h1>
            <p className="lead text-center">Get All Products</p>
            <form onSubmit={onSubmit}>
              <input type="submit" className="btn btn-info btn-block mt-4" href="http://localhost:3000/getallreviews1"/>
              
GetAllProducts.propTypes = {
  //isAuthenticated: PropTypes.bool,
  getallProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { getallProducts })(GetAllProducts);
**/