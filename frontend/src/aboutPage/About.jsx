// import AboutSectionOne from "./AboutSectionOne";
// import AboutHistory from "./AboutHistory";
// import AboutPeople from "./AboutPeople";
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
//import Lottie from "lottie-react"

function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])

    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
            <div className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h1 className="display-4 fw-bold mb-4">We pioneered the discount broking model in India.</h1>
                            <p className="lead">Now, we are breaking ground with our technology.</p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="w-100" style={{ maxWidth: "500px", margin: "0 auto" }}>
                                {/*<Lottie animationData={tradingAnimation} loop={true} />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* History Section */}
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-6" data-aos="fade-up">
                        <div className="card h-100 shadow-sm border-0 p-4">
                            <h3 className="fw-bold mb-3">Our Beginning</h3>
                            <p className="text-muted">
                                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that
                                traders and investors face in India in terms of cost, support, and technology. We named the company Easy
                                Stock, a combination of Zero and 'Rodha', the Sanskrit word for barrier.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="card h-100 shadow-sm border-0 p-4">
                            <h3 className="fw-bold mb-3">Where We Are Today</h3>
                            <p className="text-muted">
                                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in
                                India. Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of
                                investment platforms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row g-4 text-center">
                        <div className="col-md-4" data-aos="zoom-in">
                            <div className="p-4">
                                <h2 className="display-4 fw-bold text-primary">1Cr+</h2>
                                <p className="text-muted">Active Clients</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
                            <div className="p-4">
                                <h2 className="display-4 fw-bold text-primary">15%</h2>
                                <p className="text-muted">Of All Indian Retail Trading Volumes</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
                            <div className="p-4">
                                <h2 className="display-4 fw-bold text-primary">2010</h2>
                                <p className="text-muted">Year Established</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Initiatives Section */}
            <div className="container py-5">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="w-100" style={{ maxWidth: "500px", margin: "0 auto" }}>
                            <img src="/placeholder.svg?height=400&width=400" alt="Stock Market Illustration" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <h2 className="fw-bold mb-4">Our Initiatives</h2>
                        <div className="d-flex align-items-start mb-4">
                            <div className="bg-primary text-white rounded-circle p-3 me-3">
                                <i className="bi bi-book fs-4"></i>
                            </div>
                            <div>
                                <h5 className="fw-bold">Educational Programs</h5>
                                <p className="text-muted">
                                    We run popular open online educational and community initiatives to empower retail traders and
                                    investors.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start">
                            <div className="bg-primary text-white rounded-circle p-3 me-3">
                                <i className="bi bi-graph-up fs-4"></i>
                            </div>
                            <div>
                                <h5 className="fw-bold">Rainmatter</h5>
                                <p className="text-muted">
                                    Our fintech fund and incubator has invested in several fintech startups with the goal of growing the
                                    Indian capital markets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* People Section */}
            <div className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
                        People
                    </h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center p-5">
                                    <div className="position-relative d-inline-block mb-4">
                                        <div className="rotating-border"></div>
                                        <img
                                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2010.18.34%E2%80%AFAM-BBLsd7nNLeAwWn89DsDc6FeFcuN5Ic.png"
                                            alt="Founder"
                                            className="rounded-circle"
                                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <h3 className="fw-bold mb-3">Nithin Kamath</h3>
                                    <p className="text-muted mb-4">Founder, CEO</p>
                                    <p className="mb-4">
                                        Nithin bootstrapped and founded Easy Stock in 2010 to overcome the hurdles he faced during his
                                        decade long stint as a trader. Today, Easy Stock has changed the landscape of the Indian broking
                                        industry.
                                    </p>
                                    <p className="mb-4">
                                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory
                                        Committee (MDAC).
                                    </p>
                                    <div className="d-flex justify-content-center gap-3">
                                        <a href="#" className="btn btn-outline-primary">
                                            Homepage
                                        </a>
                                        <a href="#" className="btn btn-outline-primary">
                                            TradingQnA
                                        </a>
                                        <a href="#" className="btn btn-outline-primary">
                                            Twitter
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;