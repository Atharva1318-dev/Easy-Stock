function EcosystemCard({ title, text }) {
    return (
        <div className="card w-82 mb-3 border-0" style={{ background: "transparent" }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text fs-6">{text}</p>
            </div>
        </div>
    );
}

export default EcosystemCard;