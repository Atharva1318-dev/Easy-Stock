import PricingCard from "../Card";
import PriceBox from "../PriceBox";
import AOS from "aos"
import "aos/dist/aos.css"

function Pricing() {

    useEffect(() => {
        AOS.init({
            duration: 1450,
            once: false,
        })
    }, []);

    return (
        <div className="container" style={{ marginBottom: "5rem" }}>
            <br /><br />
            <h3 className="text-center" style={{ color: "#1E3A8A" }}>Where Low Brokerage Meets High Opportunity.</h3>
            <div className="row gx-1">
                <div className="col-12 col-md-7 d-flex justify-content-evenly align-items-center">
                    <PriceBox src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1740321725/pricing0_i1fexl.svg" text="free account"></PriceBox>
                    <PriceBox src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1740321725/pricing0_i1fexl.svg" text="Free equity delivery & direct mutual funds"></PriceBox>
                    <PriceBox src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1740321725/intradayTrades_hufd6i.svg" text="Intraday and F&O"></PriceBox>
                </div>
                <div className="col-12 col-md-5">
                    <PricingCard title="" text="We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges."/>
                </div>
            </div>
        </div >
    );
}

export default Pricing;