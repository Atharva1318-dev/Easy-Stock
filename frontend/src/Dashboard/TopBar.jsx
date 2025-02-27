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
                <div className="d-flex flex-column">
                    <span className="text-primary fw-bold fs-5">EASY</span>
                    <span className="text-primary fw-bold fs-5">STOCK</span>
                </div>
            </div>

            <div className="col-md-5">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <button>
                            <Link to="/home/summary">
                                Dashboard
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button>
                            <Link to="/home/orders">
                                Orders
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button>
                            <Link to="/home/holdings">
                                Holdings
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button>
                            <Link to="/home/positions">
                                Positions
                            </Link>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button>
                            <Link to="/home/funds" >
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
