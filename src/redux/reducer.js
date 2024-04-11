import { GET_BOOK_FAIL, GET_BOOK_REQUEST, GET_BOOK_SUCCESS } from "./constants";

const initialState ={
   loading: false,
   bookList: [],
}

function bookReducer(state=initialState,action) {
    switch (action.type) {
        case GET_BOOK_REQUEST:
            return {...state,loading: true}
        case GET_BOOK_SUCCESS:
            return {loading:false,bookList:action.payload.data};
        case GET_BOOK_FAIL:
            return {...state,loading:true,error:action.payload}
        default:return state;
    }
} 
export default bookReducer;