import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {deleteStock} from '../../redux/actions/authAction'

const DeleteStock = ({ deleteStock }) => {
  const [formData, setFormData] = useState({
   stockId: ""
  });
  const {
   stockId
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //when state of ur controller is changing then we are holding that changed value in state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      stockId: stockId
    };

    console.log(JSON.stringify(formData));
    deleteStock(formData)
  };

  return (
    <div className="price">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Delete Stock</h1>
            <p className="lead text-center">Delete Stock</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="stockId"
                  name="stockId"
                  required
                  value={stockId}
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

DeleteStock.propTypes = {
  //isAuthenticated: PropTypes.bool,
  deleteStock: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { deleteStock})(DeleteStock);