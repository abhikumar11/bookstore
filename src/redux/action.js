import { GET_BOOK_FAIL, GET_BOOK_REQUEST, GET_BOOK_SUCCESS } from "./constants";
import axios from "axios";

export const getBook=(dispatch)=>async()=>{
    try {
        dispatch({type:GET_BOOK_REQUEST,payload:"Fetching..."})
        const data = await axios.get("https://d1krvzwx5oquy1.cloudfront.net/books.json")
        
        dispatch({type:GET_BOOK_SUCCESS,payload:{data:data.data,message:"Fetched Successfully"}})
    } catch (err) {
        dispatch({type:GET_BOOK_FAIL,payload:err.message})
    }
}
export const getDetails=(dispatch,bookid)=>async()=>{
   
    try {
        dispatch({type:GET_BOOK_REQUEST,payload:"Fetching..."})
        const data = await axios.get("https://d1krvzwx5oquy1.cloudfront.net/books.json")
        
        const temp=data.data.filter((book)=>book.id===parseInt(bookid));
        
        dispatch({type:GET_BOOK_SUCCESS,payload:{data:temp,message:"Fetched Successfully"}})
    } catch (err) {
        dispatch({type:GET_BOOK_FAIL,payload:err.message})
    }
}