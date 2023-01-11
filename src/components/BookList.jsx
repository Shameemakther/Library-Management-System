import '../styles/BookList.css'
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const BookList = () => {
    let [books, setBooks] = useState([])

    // to fetch the route value
    let location = useLocation();

    useEffect(() => {
        let fetchBook = async () => {
            let response = await fetch('http://localhost:4444/books')
            let data = await response.json()
            setBooks(data);
        }
        fetchBook();
    }, [books])


    // to delete a book from server permanently
    let handleDelete = (id, title) => {
        fetch(`http://localhost:4444/books/${id}`, {
            method: 'DELETE'
        });
        alert(`${title} will be deleted permanently`)
        // it will only work after refresh, to solve that we use dependency state as books
    }

    let navigate = useNavigate()


    let read = (id) => {
        if (location.pathname == '/admin/book-list') {
            // it will navigate to a new page
            navigate(`/admin/book-list/${id}`)
            // after this go to adminPortal and use routeparameter
        } else {
            navigate(`/user/book-list/${id}`)
        }
    }




    return (
        <div className="bookList">
            <h1>Book List : <small><i>{books.length}</i></small></h1>
            <div className="book_section">
                {books.map(data => (
                    <div className="book_card">
                        <div className="book_image">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="book_details">
                            <h3>{data.title}</h3>
                            <p><b>Authors: </b>{data.authors.toString()}</p>
                            <h5>Categories: <small>{data.categories.toString()}</small></h5>
                            <h5>Page Count:{data.pageCount}</h5>
                            <button className='book_btn1' onClick={() => read(data.id)}>Read more</button>

                            {/* url path will be stored in pathname inside the location */}
                            {location.pathname == '/admin/book-list' && <button className='book_btn2' onClick={() => handleDelete(data.id, data.title)}>Delete</button>}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;