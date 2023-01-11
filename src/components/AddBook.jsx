import '../styles/AddBook.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
    // title , categories , authors , pageCount , shortDescription , longDescription , thumbnailUrl ,

    let [title, setTitle] = useState("")
    let [authors, setAuthors] = useState("")
    let [categories, setCategories] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setlongDescription] = useState("")
    let [thumbnailUrl, setThumbnailUrl] = useState("")


    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();

        //data to be posted 
        let bookData = { title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl }

        // posting to server
        fetch('http://localhost:4444/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
            // remove to string from booklist if not working
        })
        alert('Book added successfully')
        navigate('/admin/book-list')
    }



    return (
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="addBook_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="addBook_content">
                        <div className='addBook_title'>
                            {/* <label htmlFor="">Title</label> */}
                            <input className='input1' required type="text" placeholder='Title of the book' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='addBook_authors'>
                            <input required type="text" placeholder='Authors of the book' value={authors} onChange={e => setAuthors(e.target.value)} />
                        </div>
                        <div className='addBook_categories'>
                            <input required type="text" placeholder='Categories of the book' value={categories} onChange={e => setCategories(e.target.value)} />
                        </div>
                        <div className='addBook_pageCount'>
                            <input required type="number" min={0} placeholder='Page count of the book' value={pageCount} onChange={e => setPageCount(e.target.value)} />
                        </div>
                        <div className='addBook_shortDescriptionDescription'>
                            <textarea required name="" placeholder='Short description of the book' id="" cols="66" rows="5" value={shortDescription} onChange={e => setShortDescription(e.target.value)}></textarea>
                        </div>
                        <div className='addBook_longDescriptionDescription'>
                            <textarea required name="" placeholder='Long description of the book' id="" cols="66" rows="5" value={longDescription} onChange={e => setlongDescription(e.target.value)}></textarea>
                        </div>
                        <div className='addBook_thumbnailthumbnailUrl'>
                            <input required type="text" min={0} placeholder='Thumbnail url of the book' value={thumbnailUrl} onChange={e => setThumbnailUrl(e.target.value)} />
                        </div>
                        <button className='addBook_btn' type='submit'>Add Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddBook;