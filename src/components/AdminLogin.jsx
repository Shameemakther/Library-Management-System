import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AdminLogin.css'

const AdminLogin = () => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();

        // to verify the email and password
        let data = { email, password }
        if (email == "admin@gmail.com" && password == 1234) {
            navigate('/admin/')
        } else {
            alert(`Invalid credentials`)
        }
    }

    return (
        <div className="adminLogin">
            <div className="form">
                <h1>Login as Admin</h1>
                <div className="form_input">
                    <form action="" onSubmit={handleSubmit} >
                        <div className="email">
                            <label className="indicator" htmlFor="">Email</label>
                            <br />
                            <input required type="email" placeholder="Enter email" className="" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="password">
                            <label className="indicator" htmlFor="">Password</label>
                            <br />
                            <input required type="password" placeholder="Enter password" className="" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="admin_btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AdminLogin;
// input tag is always have individual division 