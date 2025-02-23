function PriceBox({ src, text }) {
    return (
        <div className="border-end d-flex align-items-center" style={{ maxWidth: "220px", maxHeight: "83px", padding: "0 4px 0 4px" }} >
            <img src={src} alt="" style={{ width: "30%", height: "30%" }} />
            <p style={{ fontSize: "xx-small" }}>{text}</p>
        </div>

    );
}

export default PriceBox;