import { Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import UserDashboard from './UserDashboard';
import UserNavbar from './UserNavbar';
import ReadBook from './ReadBook';

const UserPortal = () => {
    return (
        <div className="userPortal">
            <UserNavbar />
            <Routes>
                <Route path='/' element={<UserDashboard />} />
                <Route path='/book-list' element={<BookList />} />
                <Route path="/book-list/:id" element={<ReadBook />} />
            </Routes>
        </div>
    );
}

export default UserPortal;