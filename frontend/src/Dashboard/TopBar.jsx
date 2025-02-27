import SectionOneLeft from "./SectionOneLeft";
import SectionOneRight from "./SectionOneRight";
import { Link } from "react-router-dom";
import { useState } from "react";

function TopBar() {
    const [activeTab, setActiveTab] = useState("Holdings");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="row mb-3 align-items-center">
            <div className="col-md-4 d-flex align-items-center">
                <img
                    src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1740296191/newLogo_bgmfhj.png"
                    alt="Easy Stock Logo"
                    width={40}
                    height={40}
                    className="me-2"
                />
            </div>

            <div className="col-md-5">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link
                            to="/home/summary"
                            onClick={() => handleTabClick("Dashboard")}
                            className={`nav-link ${activeTab === "Dashboard" ? "active" : ""}`}
                            style={{ textDecoration: "none" }}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/home/orders"
                            onClick={() => handleTabClick("Orders")}
                            className={`nav-link ${activeTab === "Orders" ? "active" : ""}`}
                            style={{ textDecoration: "none" }}
                        >
                            Orders
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/home/holdings"
                            onClick={() => handleTabClick("Holdings")}
                            className={`nav-link ${activeTab === "Holdings" ? "active" : ""}`}
                            style={{ textDecoration: "none" }}
                        >
                            Holdings
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/home/positions"
                            onClick={() => handleTabClick("Positions")}
                            className={`nav-link ${activeTab === "Positions" ? "active" : ""}`}
                            style={{ textDecoration: "none" }}
                        >
                            Positions
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/home/funds"
                            onClick={() => handleTabClick("Funds")}
                            className={`nav-link ${activeTab === "Funds" ? "active" : ""}`}
                            style={{ textDecoration: "none" }}
                        >
                            Funds
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-3 text-end">
                <span className="me-3">
                    NIFTY 50 <span className="text-success">0.00</span>
                </span>
                <span>
                    SENSEX <span className="text-success">0.00</span>
                </span>
            </div>
        </div>
    );
}

export default TopBar;
