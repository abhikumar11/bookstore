import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/action";
import { useParams } from "react-router-dom";

const BookDetails = () => {
     const dispatch = useDispatch();
     const { id } = useParams();

     useEffect(() => {
          dispatch(getDetails(dispatch, id));
     }, []);

     const { loading, bookList, error } = useSelector((state) => state);

     return (
          <div>
               {bookList?.map((book) => (
                    <div class="container mt-5 mb-5">
                         <div class="row d-flex justify-content-center">
                              <div class="col-md-10">
                                   <div class="card">
                                        <div class="row">
                                             <div class="col-md-6">
                                                  <div class="images p-3">
                                                       <div class="text-center p-4">
                                                            {" "}
                                                            <img
                                                                 id="main-image"
                                                                 src={book.volumeInfo.imageLinks?.thumbnail}
                                                                 width="200"
                                                            />{" "}
                                                       </div>
                                                      
                                                  </div>
                                             </div>
                                             <div class="col-md-6">
                                                  <div class="product p-4">
                                                       
                                                       <div class="mt-4 mb-3">
                                                            {" "}
                                                            
                                                            <h5 class="text-uppercase">
                                                                {book.volumeInfo.title}
                                                            </h5>
                                                            <div class="price d-flex flex-row align-items-center">
                                                                 {" "}
                                                                 <span class="act-price">
                                                                 &#8377;{book.saleInfo.saleability==="FOR_SALE"?book.saleInfo.retailPrice?.amount:"NOT FOR SALE"}
                                                                 </span>
                                                                
                                                            </div>
                                                       </div>
                                                       <p class="about">
                                                       {book.volumeInfo.description}
                                                       </p>
                                                       <div class="mt-5">
                                                            <h6 class="text-normal">
                                                                 Print Length:{book.volumeInfo.pageCount}
                                                            </h6>
                                                            <h6 class="text-normal">
                                                            Publisher:{book.volumeInfo.publisher}
                                                            </h6>
                                                            <h6 class="text-normal">
                                                            Publication Date:{book.volumeInfo.publishedDate}
                                                            </h6>
                                                       </div>
                                                       <div class="mt-4 align-items-center">
                                                            {" "}
                                                            <a href={book.volumeInfo.previewLink} target="new">
                                                            <button class="btn btn-primary text-Normal mr-2 px-4">
                                                             Quick Preview
                                                            </button>{" "}
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     );
};
export default BookDetails;
