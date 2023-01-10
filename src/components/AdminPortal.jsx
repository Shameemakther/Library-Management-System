import AdminNavbar from "./AdminNavbar";
import { Routes, Route } from 'react-router-dom'
import AdminDashBoard from "./AdminDashBoard";
import BookList from "./BookList";
import UserList from "./UserList";
import ReadBook from "./ReadBook";
import AddUser from "./AddUser";
import AddBook from "./AddBook";

const AdminPortal = () => {
    

    return (
        <div className="adminPortal">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashBoard />} />
                <Route path="/book-list" element={<BookList />} />
                <Route path="/user-list" element={<UserList/>} />

                {/* (: routeParameters) is used to specify the variable parameters. it is delclared in the Booklist */}
                <Route path="/book-list/:id" element={<ReadBook />} />
                
                <Route path="/add-user"  element={<AddUser/>} />

                <Route path="/add-book" element={<AddBook/>}/>

            </Routes>
        </div>
    );
}

export default AdminPortal;

// Nested routing - Router containg more than one router(We can use BrowserRouter only once)
// one project require only one browserRouter
