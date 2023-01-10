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
                    <div className='title'>
                        {/* <label htmlFor="">Title</label> */}
                        <input required type="text" placeholder='Title of the book' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='authorss'>
                        <input required type="text" placeholder='authors of the book' value={authors} onChange={e => setAuthors(e.target.value)} />
                    </div>
                    <div className='categories'>
                        <input required type="text" placeholder='categories of the book' value={categories} onChange={e => setCategories(e.target.value)} />
                    </div>
                    <div className='pageCount'>
                        <input required type="number" min={0} placeholder='Page count of the book' value={pageCount} onChange={e => setPageCount(e.target.value)} />
                    </div>
                    <div className='shortDescriptionDescription'>
                        <textarea required name="" placeholder='shortDescription description of the book' id="" cols="30" rows="10" value={shortDescription} onChange={e => setShortDescription(e.target.value)}></textarea>
                    </div>
                    <div className='longDescriptionDescription'>
                        <textarea required name="" placeholder='longDescription description of the book' id="" cols="30" rows="10" value={longDescription} onChange={e => setlongDescription(e.target.value)}></textarea>
                    </div>
                    <div className='thumbnailthumbnailUrl'>
                        <input required type="text" min={0} placeholder='thumbnailUrl of the book' value={thumbnailUrl} onChange={e => setThumbnailUrl(e.target.value)} />
                    </div>
                    <button type='submit'>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;