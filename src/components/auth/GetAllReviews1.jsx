import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux'
//import {getallReviews} from '../../redux/actions/authAction'
import ReactDOM from 'react-dom';
import axios from "axios";


function GetAllReviews1() {

    let [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios
      .get("http://localhost:9050/api/Review/")
      .then(response => setReviews(response.data));
    }, [])
    const resultList = (reviews || []).map((review)=>
    <tr key ={review.id}>
        <td>{review.comment}</td>
        <td>{review.rating}</td>
        <td>{review.productId}</td>
        <td>{review.username}</td>
    </tr>);
    console.log(reviews)
    return (
        <div className="App">
          <h1 className="h1"> Product Results </h1>
                <div className="reviews">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th className="comment-col">Comment</th>
                                <th className="rating-col">Rating</th>
                                <th className="productid-col">Product Id</th>
                                <th className="username-col">Username</th>
                               
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
ReactDOM.render(<GetAllReviews1 />, rootElement);

export default GetAllReviews1;