//src/components/layouts/
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div class="landing">
        <div class="dark-overlay landing-inner text-light">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 class="display-3 mb-4">Stock</h1>
                <p class="lead">
                  {" "}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <Link
                  href="addStock.html"
                  class="btn btn-lg btn-info mr-2"
                  to="/addstock"
                >
                  Add Stock
                </Link>
                <Link
                  href="updateStock.html"
                  class="btn btn-lg btn-info mr-2"
                  to="/updatestock"
                >
                  Update Stock
                </Link>
                <Link
                  href="deleteStock"
                  class="btn btn-lg btn-info mr-2"
                  to="/deleteStock"
                >
                  Delete Stock
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
