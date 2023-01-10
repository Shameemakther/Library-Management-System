import { Link } from "react-router-dom";
import '../styles/LandingPage.css'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div className="selectLoginType">
                <h1>Library Management System</h1>
                <div className="user-admin">
                    <div className="admin">
                        <div>
                            <img height={100} width={100} src="images/LoadingPage/admins.png" alt="" />
                        </div>
                        <Link to='/admin-login' className="landing-btn"><button className="btn-1">Admin Login</button></Link>
                    </div>
                    <div className="user">
                        <div>
                            <img height={100} width={100} src="images/LoadingPage/guest.png" alt="" />
                        </div>
                        <Link to='/user-login' className="landing-btn"><button className="btn-2">User Login</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default LandingPage;