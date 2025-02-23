import PricingCard from "../Card";
import PriceBox from "../PriceBox";

function Pricing() {
    return (
        <div className="container">
            <br /><br />
            <h3 className="text-center" style={{ color: "#1E3A8A" }}>Where Low Brokerage Meets High Opportunity.</h3>
            <div className="row gx-1">
                <div className="col-12 col-md-7 d-flex justify-content-evenly align-items-center">
                    <PriceBox src="../src/assets/pricing0.svg" text="free account"></PriceBox>
                    <PriceBox src="../src/assets/pricing0.svg" text="Free equity delivery & direct mutual funds"></PriceBox>
                    <PriceBox src="../src/assets/intradayTrades.svg" text="Intraday and F&O"></PriceBox>
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