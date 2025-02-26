import AOS from "aos"
import "aos/dist/aos.css"

function AboutPeople() {
    return (
        <div className="bg-light py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
                    People
                </h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body text-center p-5">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2010.18.34%E2%80%AFAM-BBLsd7nNLeAwWn89DsDc6FeFcuN5Ic.png"
                                    alt="Founder"
                                    className="rounded-circle mb-4"
                                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                />
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
    );
}

export default AboutPeople;