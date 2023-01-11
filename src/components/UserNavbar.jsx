import '../styles/UserNavbar.css'
import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
            <div className="user_navContent">
                <div className="user_navLogo">
                    <img src="https://library.centennialcollege.ca/images/centennialLibraryLogo.png" alt="" />
                </div>
                <div className="user_navLink">
                    <Link to="/user/">Dashboard</Link>
                    <Link to="/user/book-list">Book List</Link>
                    <Link to="/">Log Out</Link>
                </div>

            </div>
        </div>
     );
}
 
export default UserNavbar;