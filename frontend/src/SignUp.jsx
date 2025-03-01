import SignUpFreeBtn from './SignUpFreeBtn';
import "./SignUp.css";
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link, useNavigate } from "react-router-dom";
import { Snackbar } from '@mui/material';
import axios from "axios";
import Typed from "typed.js"

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

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://easy-stock-backend.onrender.com/signup",
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

    const taglineRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(taglineRef.current, {
            strings: ["TRADE&nbsp;&nbsp;EASY, GROW&nbsp;&nbsp;FAST!", "Join us and start your investment journey today!"],
            typeSpeed: 60,
            backSpeed: 25,
            loop: true,
        })

        return () => {
            typed.destroy() // Cleanup on unmount
        }
    }, [])

    return (
        <div className="signup-page bg-light min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <div className="card overflow-hidden border-0 shadow-lg">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-6 d-none d-lg-block p-4" style={{ backgroundColor: "#1E3A8A" }}>
                                        <div className="d-flex flex-column h-100">
                                            <div className="my-auto">
                                                <h2 className="text-white mb-4">EASY STOCK</h2>
                                                <span className="text-white mb-4" ref={taglineRef}></span>
                                                <div className="animation-container">
                                                    <lottie-player
                                                        src="https://lottie.host/2c1ce8ca-3937-4265-9255-03a6e6d3df2c/zrlYpBy4ck.lottie"
                                                        background="transparent"
                                                        speed="1"
                                                        style={{ width: "100%", height: "300px" }}
                                                        loop
                                                        autoplay
                                                    ></lottie-player>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center mb-5">
                                                <h1 className="h3 fw-bold">Create an Account</h1>
                                                <p className="text-muted">Sign up to get started with Easy Stock</p>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-4">
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <i className="fas fa-envelope text-muted"></i>
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
                                                            <i className="fas fa-user text-muted"></i>
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control bg-light border-start-0 ps-0"
                                                            placeholder="Username"
                                                            value={username}
                                                            onChange={handleUsernameChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <div className="input-group">
                                                        <span className="input-group-text bg-light border-end-0">
                                                            <i className="fas fa-lock text-muted"></i>
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
                                                            className="input-group-text bg-light border-start-0 cursor-pointer"
                                                            onClick={togglePasswordVisibility}
                                                        >
                                                            <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-muted`}></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-navy w-100 py-2 mb-4">
                                                    Sign Up
                                                </button>
                                                <div className="text-center mb-4">
                                                    <p className="text-muted">
                                                        Already have an account?{" "}
                                                        <Link to="/login" className="text-primary">
                                                            Log in
                                                        </Link>
                                                    </p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-muted mb-3">Or sign up with</p>
                                                    <div className="d-grid gap-2">
                                                        <button className="btn btn-dark mb-2 d-flex align-items-center justify-content-center">
                                                            <i className="fab fa-apple me-2"></i> Sign up with Apple
                                                        </button>
                                                        <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center">
                                                            <i className="fab fa-google me-2"></i> Sign up with Google
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
                message="Signup successful"
                onClose={() => setOpenSnackbar(false)}
            />
            <ToastContainer />
        </div>
    );
}

export default SignUp;