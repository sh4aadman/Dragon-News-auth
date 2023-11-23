import sideNews1 from '../../../assets/1.png'
import sideNews2 from '../../../assets/2.png'
import sideNews3 from '../../../assets/3.png'
import { SlCalender } from "react-icons/sl";
import moment from 'moment';

const FavoriteNews = () => {
    return (
        <div className='space-y-4 mt-8'>
            <div className='space-y-5'>
                <img className='w-full' src={sideNews1} alt="side-news" />
                <h2 className="text-xl font-semibold text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex gap-5'>
                    <p className="text-[#403F3F]">Sports</p>
                    <div className="text-[#9F9F9F] flex gap-2 items-center">
                        <SlCalender />
                        <p>{moment().format('ll')}</p>
                    </div>
                </div>
            </div>
            <div className='space-y-5'>
                <img className='w-full' src={sideNews2} alt="side-news" />
                <h2 className="text-xl font-semibold text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex gap-5'>
                    <p className="text-[#403F3F]">Sports</p>
                    <div className="text-[#9F9F9F] flex gap-2 items-center">
                        <SlCalender />
                        <p>{moment().format('ll')}</p>
                    </div>
                </div>
            </div>
            <div className='space-y-5'>
                <img className='w-full' src={sideNews3} alt="side-news" />
                <h2 className="text-xl font-semibold text-[#403F3F]">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex gap-5'>
                    <p className="text-[#403F3F]">Sports</p>
                    <div className="text-[#9F9F9F] flex gap-2 items-center">
                        <SlCalender />
                        <p>{moment().format('ll')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteNews;