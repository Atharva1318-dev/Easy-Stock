import SignUpFreeBtn from "../SignUpFreeBtn";
import AOS from "aos"
import "aos/dist/aos.css"

function OpenAccount() {

    useEffect(() => {
        AOS.init({
            duration: 1450,
            once: false,
        })
    }, []);

    return (
        <div className="container" style={{ marginBottom: "5rem" }}>
            <div className="d-flex flex-column justify-content-evenly align-items-center">
                <h3 style={{ color: "#1E3A8A" }}>Open a Easy Stock account</h3>
                <br />
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <br />
                <SignUpFreeBtn text="Sign up for free" ></SignUpFreeBtn>
                <br /><br />
            </div>
        </div>
    );
}

export default OpenAccount;