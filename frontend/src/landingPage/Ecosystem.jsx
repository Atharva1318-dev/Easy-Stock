import EcosystemCard from "./EcosystemCard";
import "./Ecosystem.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from "aos"
import "aos/dist/aos.css"

function Ecosystem() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 7000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15,
        cssEase: "linear",
        variableWidth: true, // Allows different card widths
        pauseOnHover: false,
        arrows: false, // Remove arrows for a cleaner look
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    useEffect(() => {
        AOS.init({
            duration: 1450,
            once: false,
        })
    }, []);

    return (
        <div className="px-1" style={{ marginBottom: "5rem" }}>
            <h2 className="text-center" style={{ color: "#1E3A8A" }}>Trust with confidence</h2>
            <br />
            <div className="d-flex align-items-center">
                <Slider {...settings}>
                    <EcosystemCard title="Customer-first always" text="That's why 1.5+ crore customers trust Easy Stock with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India."></EcosystemCard>
                    <EcosystemCard title="No spam or gimmicks" text="No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like."></EcosystemCard>
                    <EcosystemCard title="The Easy Stock universe" text="Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."></EcosystemCard>
                    <EcosystemCard title="Do better with money" text="With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money."></EcosystemCard>

                </Slider>
            </div>
        </div>
    );
}

export default Ecosystem;