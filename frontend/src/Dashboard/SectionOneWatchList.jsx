function SectionOne() {
    return (
        <div className="container d-flex justify-content-evenly align-items-center px-auto shadow-sm sticky-top" style={{ height: "5rem" }}>
            <div className="d-flex align-items-center justify-content-evenly gap-4 nifty">
                <p className="index">NIFTY 50</p>
                <p className="index-points" style={{ color: "green" }}>0.00</p>
                <p className="percent" style={{ color: "red" }}>0</p>
            </div>
            <div className="d-flex align-items-center justify-content-evenly gap-4 sensex">
                <p className="index">SENSEX</p>
                <p className="index-points" style={{ color: "green" }}>0.00</p>
                <p className="percent" style={{ color: "red" }}>0</p>
            </div>
        </div>

    );
}

export default SectionOne;