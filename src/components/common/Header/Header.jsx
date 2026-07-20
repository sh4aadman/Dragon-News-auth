import moment from "moment";
import logo from "../../../assets/icons/logo.png"

function Header() {
  return (
    <header className='text-center pt-12'>
            <img className='mx-auto' src={logo} alt="logo-picture" />
            <p className='mt-5'>Journalism Without Fear or Favour</p>
            <h2 className="text-2xl mt-2">{moment().format('dddd, MMMM D, YYYY')}</h2>
        </header>
  )
}

export default Header;
