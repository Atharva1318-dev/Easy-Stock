import HomeHero from './HomeHero'
import Ecosystem from './Ecosystem'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from './OpenAccount'


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Button from '@mui/material/Button';


// style = {{ background: "linearGradient(-150deg, #7fb6ef 10%, #ffffff 100%) !important" }}
function LandingPage({ username }) {



    return (
        <div>
            <HomeHero username={username}></HomeHero>
            <Ecosystem></Ecosystem>
            <br /><br />
            <Pricing></Pricing>
            {/* <Education imgUrl="../src/assets/education.svg" title="Free and open market education" text="Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading." links={["Varsity", "TradingQ&A"]}></Education > */}
            {/* <br /> */}
            <br /><br />
            <OpenAccount></OpenAccount>
        </div>
    );
}

export default LandingPage;