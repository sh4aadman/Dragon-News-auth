import { format } from "date-fns";
import logo from "../../../assets/icons/logo.png"
import { date } from "../../../utils/constants";

function Header() {
  return (
    <header className='text-center pt-12'>
            <img className='mx-auto' src={logo} alt="logo" />
            <p className='mt-5'>Journalism Without Fear or Favour</p>
            <h2 className="text-2xl mt-2.5">{format(date, 'EEEE, MMMM d, yyyy')}</h2>
        </header>
  )
}

export default Header;
