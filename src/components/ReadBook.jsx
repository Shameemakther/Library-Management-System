import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ReadBook = () => {

    let [book,setBook] = useState([])

    // useParams-> to fetch route parameters from url 
    // route parameters accessing
    let params = useParams()

    useEffect(()=>{
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4444/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    })

    return ( 
        <div className="readBook">
            <h1 style={{color:'green',marginTop:'0px'}}>Read Book</h1>
            <div className="readBook_details">
                <h1 style={{textDecoration:'underline'}}>{book.title}</h1>
                <p style={{textAlign:'left'}}>{book.shortDescription}</p>
                <p style={{textAlign:'left'}}>{book.longDescription}</p>
            </div>
        </div>
     );
}
 
export default ReadBook;