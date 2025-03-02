import HomeHero from './HomeHero'
import Ecosystem from './Ecosystem'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from './OpenAccount'
import AOS from "aos"
import "aos/dist/aos.css"


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Button from '@mui/material/Button';


// style = {{ background: "linearGradient(-150deg, #7fb6ef 10%, #ffffff 100%) !important" }}
function LandingPage({ username }) {

    useEffect(() => {
        AOS.init({
            duration: 1450,
            once: false,
        })
    }, [])



    return (
        <div>
            <HomeHero username={username}></HomeHero>
            <Ecosystem></Ecosystem>
            <Pricing></Pricing>
            {/* <Education imgUrl="../src/assets/education.svg" title="Free and open market education" text="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading." links={["Varsity", "TradingQ&A"]}></Education > */}
            <OpenAccount></OpenAccount>
        </div>
    );
}

export default LandingPage;