import SectionOneLeft from "./SectionOneLeft";
import SectionOneRight from "./SectionOneRight";

function TopBar() {
    return (
        <div className="row gx-0 sticky-top z-5 bg-white">
            <div className="col-8">
                <SectionOneRight></SectionOneRight>
            </div>
            <div className="col-4">
                <SectionOneLeft></SectionOneLeft>
            </div>
        </div>
    );
}

export default TopBar;

