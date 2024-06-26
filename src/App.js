import './App.css';
import React from "react";
import BookList from "./components/BookList";
import BookDetails from './components/BookDetails';
import { Route, Routes } from 'react-router-dom';


const App = () => {
     return (
          <div>
               <Routes>
                    <Route path="/" element={<BookList/>}/>
                    <Route path="/details/:id" element={<BookDetails/>}/>
               </Routes>
          </div>
     );
};

export default App;
