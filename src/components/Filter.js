import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
const Filter = () => {
  const { bookList } = useSelector((state) => state);
  const [generList, setGenerList] = useState([]);
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    bookList?.map((book) => setAuthorList(prev => [...prev, ...book.volumeInfo.authors]));
    bookList?.map((book) => setGenerList(prev => [...prev, book.volumeInfo.categories]));
  }, [bookList]);
  console.log(authorList);
  const [author,setAuthor]=useState(null);
  const [gener,setGener]=useState(null);
  const handleAuthor=(author)=>{

      console.log(author.target.value);
  }
  return (
    <div>
      <div className="container mb-5 ">
        <div className="row">
          <div className="col-md-4">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected disabled>Select Gener</option>
              {generList.map((item) => <option value={item}>{item}</option>)}
            </select>
          </div>
          <div className='col-md-4'>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected disabled onSelect={(e)=>handleAuthor(e)}>Select Author</option>
              {authorList.map((author) => <option value={author}>{author}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter