import PricingSectionOne from "./PricingSectionOne";
import PricingSectionTwo from "./PricingSectionTwo";

function PricingPage() {
    return (
        <div className="container my-5">
            <PricingSectionOne></PricingSectionOne>
            <br /><br />
            <PricingSectionTwo></PricingSectionTwo>
        </div>
    );
}

export default PricingPage;