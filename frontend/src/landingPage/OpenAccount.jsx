import SignUpFreeBtn from "../SignUpFreeBtn";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { Link } from "react-router-dom";

function OpenAccount() {

    useEffect(() => {
        AOS.init({
            duration: 1450,
            once: false,
        })
    }, []);

    return (
        <div className="container" style={{ marginBottom: "4rem" }}>
            <div className="d-flex flex-column justify-content-evenly align-items-center">
                <h2 style={{ color: "#1E3A8A" }}>Open a Easy Stock account</h2>
                <br />
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <br />
                <Link to="/signup"><SignUpFreeBtn text="Signup for free" ></SignUpFreeBtn></Link>
                <br /><br />
            </div>
        </div>
    );
}

export default OpenAccount;