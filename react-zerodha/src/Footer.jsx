import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight } from "lucide-react";
import './Footer.css';

export default function Footer() {
    return (
        <footer className="bg-custom-dark text-white">
            <div className="container px-2 pb-1 pt-5">
                <div className="row g-4">
                    {/* Logo and Social Section */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <Link href="/" className="d-block">
                            <img
                                src="../src/assets/newLogo.png"
                                alt="Easy Stock Logo"
                                className="bg-white p-2 custom-rounded"
                                style={{ height: "20%", width: "50%" }}
                            />
                        </Link>
                        <div className="d-flex gap-4 mt-3">
                            <Link href="#" className="hover-text">
                                <Facebook style={{ width: "1.5rem", height: "1.5rem" }} />
                                <span className="visually-hidden">Facebook</span>
                            </Link>
                            <Link href="#" className="hover-text">
                                <Twitter style={{ width: "1.5rem", height: "1.5rem" }} />
                                <span className="visually-hidden">Twitter</span>
                            </Link>
                            <Link href="#" className="hover-text">
                                <Instagram style={{ width: "1.5rem", height: "1.5rem" }} />
                                <span className="visually-hidden">Instagram</span>
                            </Link>
                            <Link href="#" className="hover-text">
                                <Linkedin style={{ width: "1.5rem", height: "1.5rem" }} />
                                <span className="visually-hidden">LinkedIn</span>
                            </Link>
                            <Link href="#" className="hover-text">
                                <Youtube style={{ width: "1.5rem", height: "1.5rem" }} />
                                <span className="visually-hidden">YouTube</span>
                            </Link>
                        </div>
                    </div>

                    {/* Company Section */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h3 className="h5 fw-bold mb-4" style={{ color: "#7fb6ef" }}>Company</h3>
                        <ul className="list-unstyled">
                            {["About", "Products", "Pricing", "Referral programme", "Careers", "Open source", "Press & media"].map(
                                (item) => (
                                    <li key={item} className="mb-2">
                                        <Link
                                            href="#"
                                            className="hover-text d-inline-flex align-items-center gap-1 group"
                                        >
                                            <ChevronRight className="chevron" style={{ width: "1rem", height: "1rem" }} />
                                            {item}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h3 className="h5 fw-bold mb-4" style={{ color: "#7fb6ef" }}>Support</h3>
                        <ul className="list-unstyled">
                            {[
                                "Contact us",
                                "Support portal",
                                "Z-Connect blog",
                                "List of charges",
                                "Downloads & resources",
                                "Videos",
                                "Market overview",
                                "How to file a complaint?",
                                "Status of your complaints",
                            ].map((item) => (
                                <li key={item} className="mb-2">
                                    <Link
                                        href="#"
                                        className="hover-text d-inline-flex align-items-center gap-1 group"
                                    >
                                        <ChevronRight className="chevron text-white" style={{ width: "1rem", height: "1rem" }} />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account Section */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h3 className="h5 fw-bold mb-4" style={{ color: "#7fb6ef" }}>Account</h3>
                        <ul className="list-unstyled">
                            {["Open an account", "Fund transfer"].map((item) => (
                                <li key={item} className="mb-2">
                                    <Link
                                        href="#"
                                        className="hover-text d-inline-flex align-items-center gap-1 group"
                                    >
                                        <ChevronRight className="chevron" style={{ width: "1rem", height: "1rem" }} />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright and Legal */}
                <div className="mt-3 pt-4 border-top" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <p className="small mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                        © 2010 - 2025, Easy Stock Broking Ltd. All rights reserved.
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.5" }}>
                        Easy Stock Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL:
                        Depository services through Easy Stock Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
                        Trading through Easy Stock Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
                        Registered Address: Easy Stock Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                        School, J.P Nagar 4th Phase, Bengaluru – 560078, Karnataka, India. For any complaints pertaining to
                        securities broking please write to complaints@easystock.com, for DP related to dp@easystock.com. Please
                        ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                </div>
            </div>
        </footer>
    );
}
