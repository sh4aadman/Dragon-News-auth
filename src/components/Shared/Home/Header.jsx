import logo from '../../../assets/logo.png'
import moment from 'moment'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo-picture" />
            <p>Journalism Without Fear or Favour</p>
            <h2 className="text-2xl">{moment().format('dddd, MMMM D, YYYY')}</h2>
        </div>
    );
};

export default Header;