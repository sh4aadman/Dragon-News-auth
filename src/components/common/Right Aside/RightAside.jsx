import LoginWith from "../../../features/auth/components/LoginWith";
import Ad from "../../../features/social/components/Ad";
import FindSocial from "../../../features/social/components/FindSocial";
import QZone from "../../../features/social/components/QZone";

function RightAside() {
  return (
    <>
      <LoginWith />
      <FindSocial />
      <QZone />
      <Ad />
    </>
  );
}

export default RightAside;
