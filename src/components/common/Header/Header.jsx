import { format } from "date-fns";
import logo from "../../../assets/icons/logo.png";
import { date } from "../../../utils/constants";

function Header() {
  return (
    <header className="text-center pt-12">
      <img className="mx-auto" src={logo} alt="logo" />
      <p className="mt-5 text-base-300 leading-7">Journalism Without Fear or Favour</p>
      <p className="text-2xl mt-2.5 leading-7">
        <span className="text-primary">{format(date, "EEEE")}</span>{", "}
        <span className="text-base-300">{format(date, "MMMM d, yyyy")}</span>
      </p>
    </header>
  );
}

export default Header;
