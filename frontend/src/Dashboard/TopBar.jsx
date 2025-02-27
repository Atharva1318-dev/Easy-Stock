import SectionOneLeft from "./SectionOneLeft";
import SectionOneRight from "./SectionOneRight";
import { Link } from "react-router-dom";
import './TopBar.css';

function TopBar() {
    return (
        <div className="row mb-3 align-items-center">
            <div className="col-md-4 d-flex align-items-center">
                <img
                    src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1740296191/newLogo_bgmfhj.png"
                    alt="Easy Stock Logo"
                    className="me-2"
                    style={{ width: "30%", height: "40%" }}
                />
            </div>

            <div className="col-md-5">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <button className="btn btn-sm btn-navy">
                            <Link to="/home/summary" style={{ textDecorationLine: "none" }}>
                                Dashboard
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-sm  btn-navy">
                            <Link to="/home/orders" style={{ textDecorationLine: "none" }}>
                                Orders
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-sm  btn-navy">
                            <Link to="/home/holdings" style={{ textDecorationLine: "none" }}>
                                Holdings
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-sm  btn-navy">
                            <Link to="/home/positions" style={{ textDecorationLine: "none" }}>
                                Positions
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-sm btn-navy">
                            <Link to="/home/funds" style={{ textDecorationLine: "none" }}>
                                Funds
                            </Link>
                        </button>
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
    )
}

export default TopBar;
