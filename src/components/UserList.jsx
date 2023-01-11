import '../styles/UserList.css'
import { useState, useEffect } from 'react';


const UserList = () => {
    let [users, setUsers] = useState([])

    useEffect(() => {
        let fetchUser = async () => {
            let response = await fetch('http://localhost:4444/users')
            let data = await response.json()
            setUsers(data)
        }
        fetchUser()
    }, [])

    let handleRemove = (id, name) => {
        setUsers(users.filter(x => x.id!=id))
        alert(`${name} has been removed`)
    }

    return (
        <div className="userList">
            <h1 style={{color:'green'}} >User List  <small style={{color:'black'}}>: <i>{users.length}</i></small></h1>
            <div className="user_section">
                {users.map(data => (
                    <div className="user_card">
                        <h4>Name: {data.name}</h4>
                        <h5>Age: {data.age}</h5>
                        <p><b>Email:</b> {data.email}</p>
                        <p><b>Phone number:</b> {data.phoneNumber}</p>
                        <button onClick={() => handleRemove(data.id, data.name)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;