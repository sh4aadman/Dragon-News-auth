import logo from '../../../assets/logo.png'
import moment from 'moment'

const Header = () => {
    return (
        <div className='text-center pt-12'>
            <img className='mx-auto' src={logo} alt="logo-picture" />
            <p className='mt-5'>Journalism Without Fear or Favour</p>
            <h2 className="text-2xl mt-2">{moment().format('dddd, MMMM D, YYYY')}</h2>
        </div>
    );
};

export default Header;