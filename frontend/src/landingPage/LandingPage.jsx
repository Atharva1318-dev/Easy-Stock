import { useEffect } from 'react'
import HomeHero from './HomeHero'
import Ecosystem from './Ecosystem'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from './OpenAccount'
import AOS, { init } from "aos";
import "aos/dist/aos.css";


// style = {{ background: "linearGradient(-150deg, #7fb6ef 10%, #ffffff 100%) !important" }}
function LandingPage({ username }) {

    useEffect(() => {
        AOS.init({
            duration: 1450,
            easing: 'ease-in-out',
            once: false,
        });
        // Delay the refresh to allow all components to render
        setTimeout(() => {
            AOS.refresh();
        }, 500); // Adjust delay if necessary
    }, []);

    return (
        <div className='min-vh-100'>
            <HomeHero username={username} />
            <div data-aos="fade-up">
                <Ecosystem />
            </div>
            <div data-aos="fade-up">
                <Pricing />
            </div>
            <div data-aos="fade-up">
                <OpenAccount />
            </div>
        </div>
    );
}

export default LandingPage;