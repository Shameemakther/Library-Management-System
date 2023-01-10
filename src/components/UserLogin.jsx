import { useNavigate } from "react-router-dom";
import '../styles/UserLogin.css'

const UserLogin = () => {

    let navigate = useNavigate()

    let login = () => {
        navigate('/user/')
    }

    return (
        <div className="userLogin">
            <div className="form_user">
                <h1>Login as User</h1>
                <div className="form_userinput">
                    <form action="" onSubmit={login} >
                        <div className="email_user">
                            <label className="indicator" htmlFor="">Email</label>
                            <br />
                            <input required type="email_user" placeholder="Enter email" className="" />
                        </div>
                        <div className="password_user">
                            <label className="indicator" htmlFor="">Password</label>
                            <br />
                            <input required type="password" placeholder="Enter password" className="" />
                        </div>
                        <button type="submit" className="user_btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;