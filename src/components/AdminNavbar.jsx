import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="navContent">
                <div className="navLogo">
                    {/* <h1>AdminPortal</h1> */}
                    <img src="https://library.centennialcollege.ca/images/centennialLibraryLogo.png" alt="" />
                </div>
                <div className="navLink">
                    <Link to="/admin/">Dashboard</Link>
                    <Link to="/admin/add-book">Add Books</Link>
                    <Link to="/admin/add-user">Add User</Link>
                    <Link to="/admin/book-list">Book List</Link>
                    <Link to="/admin/user-list">User List</Link>
                    <Link to="/">Log Out</Link>
                </div>

            </div>
        </div>
     );
}
 
export default AdminNavbar;