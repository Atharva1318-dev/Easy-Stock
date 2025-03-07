function EcosystemCard({ title, text }) {
    return (
        <div className="card mb-3 mx-2 border-1 shadow rounded-4" style={{ width: "550px", height: "170px" }}>
            <div className="card-body">
                <h5 className="card-title" style={{ color: "#7fb6ef" }}>{title}</h5>
                <hr className="m-0 pb-2" />
                <p className="card-text fs-6">{text}</p>
            </div>
        </div>
    );
}

export default EcosystemCard;