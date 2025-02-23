function PeopleBox({ imgUrl, text }) {
    return (
        <div className="w-75 h-75">
            <div className="p-5 d-flex flex-column justify-content-center">
                <img src={imgUrl} alt="" className="rounded-circle w-25 h-25" />
                <p className="text-center">{text}</p>
            </div>
        </div>
    );
}

export default PeopleBox;