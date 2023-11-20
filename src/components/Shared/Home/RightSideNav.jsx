import Ad from "../Navigation/Ad";
import FindUsOn from "../Navigation/FindUsOn";
import LoginWith from "../Navigation/LoginWith";
import QZone from "./QZone";

const RightSideNav = () => {
    return (
        <div>
            <LoginWith></LoginWith>
            <FindUsOn></FindUsOn>
            <QZone></QZone>
            <Ad></Ad>
        </div>
    );
};

export default RightSideNav;