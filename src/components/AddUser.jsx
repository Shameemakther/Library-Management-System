import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddUser.css'
const AddUser = () => {

    let [name,setName] = useState('')
    let [age,setAge] = useState('')
    let [email,setEmail] = useState('')
    let [phoneNumber,setPhoneNumber] = useState('')

    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();

        let booksData = {name,age,email,phoneNumber}

        fetch('http://localhost:4444/users',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(booksData)
        })
        alert("User added successfully")
        navigate('/admin/user-list')
    }

    return ( 
        <div className="addUser">
            <h1 style={{color:'green'}} >Add a new User</h1>
            <div className="addUser_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="addUser_name">
                        {/* <label htmlFor="">Name: </label> */}
                        <input required type="name" placeholder='Enter user name' value={name} onChange={(e) => setName(e.target.value)}  />
                    </div>
                    <div className="addUser_age">
                        {/* <label htmlFor="">Age: </label> */}
                        <input required type="number" min={1} placeholder='Enter user age' value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="addUser_email">
                        {/* <label htmlFor="">E-mail: </label> */}
                        <input required type="email" placeholder='Enter user email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="addUser_phoneNumber">
                        {/* <label htmlFor="">Phone Number: </label> */}
                        <input required type="tel" minLength={10} maxLength={10} placeholder='Enter User phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <button className='addUser_btn' type='submit'>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;