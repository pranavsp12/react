
import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux'
//import {getallReviews} from '../../redux/actions/authAction'
import ReactDOM from 'react-dom';
import axios from "axios";


function GetAllProducts1() {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios
      .get("http://localhost:9050/api/ProductCat/")
      .then(response => setProducts(response.data));
    }, [])
    const resultList = (products || []).map((product)=>
      <tr key ={product.productId}>
        <td>{product.productName}</td>
        <td>{product.category}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.expiryDate}</td>
    </tr>);
    console.log(products)
    return (
        <div className="App">
          <h1 className="h1"> Product Results </h1>
                <div className="product">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                               
                                
                                <th className="productName-col">ProductName</th>
                                <th className="category-col">Category</th>
                                <th className="description-col">Description</th>
                                <th className="price-col">Price</th>
                                <th className="expiryDate-col">expiryDate</th>




                            </tr>
                        </thead>
                        <tbody>{resultList}</tbody>
                    </table>
                </div>
        </div>
      );
    
}

/*const mapStateToProps = (state) => {
    return {
    //isAuthenticated: state.auth.isAuthenticated,
    reviewData: state.reviews
    }
  };
const mapDispatchToProps = (dispatch) => {
    return {
        getallReviews: () => dispatch(getallReviews())
    }
};*/

//export default connect(mapStateToProps, mapDispatchToProps)(GetAllReviews1)
const rootElement = document.getElementById("root");
ReactDOM.render(<GetAllProducts1 />, rootElement);

export default GetAllProducts1;