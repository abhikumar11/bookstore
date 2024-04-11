import React, { useEffect } from "react";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { getBook, getDetails } from "../redux/action";
import {Link} from "react-router-dom";

const BookList = () => {
     const { loading, bookList, error } = useSelector((state) => state);
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getBook(dispatch));
     }, []);
     console.log(bookList);
     return (
          <div>
               BookList
               <Filter />
               {bookList &&
                    bookList?.map((book) => (
                         <div>
                              <img
                                   src={book.volumeInfo.imageLinks?.thumbnail}
                                   alt={book.volumeInfo.title}
                              />
                             <Link to={`/details/${book.id}`}><h3>{book.volumeInfo.title}</h3></Link>
                              <p>
                                   Author(s):{" "}
                                   {book.volumeInfo.authors.join(",")}
                              </p>
                         </div>
                    ))}
          </div>
     );
};

export default BookList;
