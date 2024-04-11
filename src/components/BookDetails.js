import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBook, getDetails } from "../redux/action";
import { useParams } from "react-router-dom";

const BookDetails = () => {
     const dispatch = useDispatch();
     const {id} = useParams();

     useEffect(() => {
          dispatch(getDetails(dispatch, id));
     }, []);

     const { loading, bookList, error } = useSelector((state) => state);

     return (
          <div>
               {bookList?.map((book) => (
                    <div>
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}/>
                    <p>title:{book.volumeInfo.title}</p>
                    <p>description:{book.volumeInfo.description}</p>
                    <p>price:{book.saleInfo.saleability==="FOR_SALE"?book.saleInfo.retailPrice?.amount:"NOT FOR SALE"}</p>
                    <p>Print length:{book.volumeInfo.pageCount}</p>
                    <p>Publisher:{book.volumeInfo.publisher}</p>
                    <p>Publication Date:{book.volumeInfo.publishedDate}</p>
                    </div>
               ))}
          </div>
     );
};

export default BookDetails;
