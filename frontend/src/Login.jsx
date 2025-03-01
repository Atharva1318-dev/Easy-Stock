import { useState } from 'react';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Snackbar } from '@mui/material';
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import { FaApple, FaGoogle, FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa"

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    const [showPassword, setShowPassword] = useState(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                "https://easy-stock-backend.onrender.com/login",
                {
                    email: email,
                    password: password
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                setOpenSnackbar(true);
                setTimeout(() => {
                    navigate("/");
                }, 1200);
            } else {
                handleError(message);
            }
            console.log("login successfull");
        } catch (error) {
            console.log(error);
        }
        setEmail("");
        setPassword("");
    };



    return (
        <div className="min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <div className="card overflow-hidden border-0 shadow-lg">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-6 d-none d-lg-block p-1" style={{ backgroundColor: "#1E3A8A" }}>
                                        <div className="my-auto pt-5 d-flex justify-content-center align-items-center w-100 h-100">
                                            <DotLottieReact
                                                src="https://lottie.host/25c305c2-4478-49b7-bc28-922b460b2e08/MUHfY7RzSw.lottie"
                                                loop
                                                autoplay
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center mb-5">
                                                <h1 className="h3 fw-bold">Welcome back</h1>
                                                <p className="text-muted">Sign in to continue to Easy Stock</p>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-4">
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <FaEnvelope className="text-muted" />
                                                        </span>
                                                        <input
                                                            type="email"
                                                            className="form-control bg-light border-start-0 ps-0"
                                                            placeholder="Email address"
                                                            value={email}
                                                            onChange={handleEmailChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <FaLock className="text-muted" />
                                                        </span>
                                                        <input
                                                            type={showPassword ? "text" : "password"}
                                                            className="form-control bg-light border-start-0 border-end-0 ps-0"
                                                            placeholder="Password"
                                                            value={password}
                                                            onChange={handlePasswordChange}
                                                            required
                                                        />
                                                        <span
                                                            className="input-group-text bg-light border-start-0"
                                                            style={{ cursor: "pointer" }}
                                                            onClick={togglePasswordVisibility}
                                                        >
                                                            {showPassword ? <FaEyeSlash className="text-muted" /> : <FaEye className="text-muted" />}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                        <label className="form-check-label text-muted" htmlFor="rememberMe">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                    <a href="#" className="text-primary text-decoration-none">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <button type="submit" className="btn btn-primary w-100 py-2 mb-4">
                                                    Log in
                                                </button>
                                                <div className="text-center mb-4">
                                                    <p className="text-muted">
                                                        Don't have an account?{" "}
                                                        <Link to="/signup" className="text-primary">
                                                            Sign up
                                                        </Link>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-muted mb-3">Or continue with</p>
                                                    <div className="d-grid gap-2">
                                                        <button className="btn btn-dark mb-2 d-flex align-items-center justify-content-center">
                                                            <FaApple className="me-2" /> Log in with Apple
                                                        </button>
                                                        <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                                            <FaGoogle className="me-2" /> Log in with Google
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={1000}
                message="Login successful"
                onClose={() => setOpenSnackbar(false)}
            />
            <ToastContainer />
        </div>
    );
}

export default Login;