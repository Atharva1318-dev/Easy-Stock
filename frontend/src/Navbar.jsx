import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ username, onLogout }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top px-4 sm-px-5 py-2 mb-1" style={{ paddingRight: "3rem" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1740296191/newLogo_bgmfhj.png" alt="logo" style={{ height: "2.9269rem", width: "85%" }} /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {!username ? <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li> : ""}
                            {!username ? <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li> : ""}
                            {username ? <li className="nav-item">
                                <button className="nav-link active" aria-current="page" onClick={onLogout}>Logout</button>
                            </li> : ""}
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}