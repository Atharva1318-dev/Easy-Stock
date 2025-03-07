function EcosystemCard({ title, text }) {
    return (
        <div className="card mb-3 mx-2 border-0 shadow rounded-4" style={{ width: "550px", height: "167px", overflow: "hidden" }}>
            <div className="card-body p-3">
                <h5 className="card-title" style={{ color: "#7fb6ef" }}>{title}</h5>
                <hr className="m-0 pb-1" />
                <p className="card-text fs-6">{text}</p>
            </div>
        </div>
    );
}

export default EcosystemCard;