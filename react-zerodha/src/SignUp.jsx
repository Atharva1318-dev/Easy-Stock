import SignUpFreeBtn from './SignUpFreeBtn';
import "./SignUp.css";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Snackbar } from '@mui/material';
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";


function SignUp() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:8080/signup",
                {
                    email: email,
                    username: username,
                    password: password
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            if (success) {
                setOpenSnackbar(true);
                setTimeout(() => {
                    navigate("/");
                }, 1200);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-7">
                    <img src="../src/assets/signup.png" alt="" />
                </div>
                <div className="col-5">
                    <h5>Signup now</h5>
                    <div className="form-container">
                        <p className="title">Welcome</p>
                        <form className="form" onSubmit={handleSubmit}>
                            <input type="email" className="input" placeholder="Email" value={email} onChange={handleEmailChange} />
                            <input type="text" className="input" placeholder="Username" value={username} onChange={handleUsernameChange} />
                            <input type="password" className="input" placeholder="Password" value={password} onChange={handlePasswordChange} />
                            <p className="page-link" >
                            </p>
                            <button className="form-btn btn-primary" on>Signup</button>
                        </form>
                    </div>


                </div>
            </div>
            <br /><br /><br />
            <div className='d-flex justify-content-center align-items-center'>
                <p className="text-muted small text-center">
                    I authorise Easy Stock to contact me even if my number is registered on DND. I authorise Easy Stock to fetch my KYC information from the C-KYC registry with my PAN.<br />Please visit this article to know more.<br /><br />

                    By submitting your contact details, you authorize Easy Stock to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening<br />as per KRA regulations and PMLA guidelines.<br /><br />

                    If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.
                </p>
            </div>
            <br />
            <Snackbar
                open={openSnackbar}
                autoHideDuration={1000}
                message="Signup successful"
                onClose={() => setOpenSnackbar(false)}
            />
        </div>
    );
}

export default SignUp;