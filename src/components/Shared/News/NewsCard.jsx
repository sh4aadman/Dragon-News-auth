import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, author, title, image_url, details } = news;

    return (
        <div className='mt-7'>
            <div className='flex justify-between items-center bg-[#F3F3F3] p-5'>
                <div className='flex gap-3'>
                    <img className='w-10 rounded-full' src={author.img} alt="author" />
                    <div>
                        <h2 className='font-semibold text-[#403F3F]'>{author.name}</h2>
                        <p className='text-sm text-[#706F6F]'>{author.published_date}</p>
                    </div>
                </div>
                <div className='space-x-3 text-[#706F6F]'>
                    <button><FaRegBookmark /></button>
                    <button><IoShareSocialOutline /></button>
                </div>
            </div>
            <div className='p-5 border'>
                <div>
                    <h2 className='text-xl font-bold mb-5'>{title}</h2>
                    <img src={image_url} alt="news-thumbnail" />
                    <p className='text-[#706F6F] mt-8'>{details.slice(0, 200)}...</p>
                    <Link to={`/news/${_id}`} className='text-[#FF8C47] font-semibold'>Read More</Link>
                </div>
                <hr className='my-5' />
                <div className='flex justify-between items-center'>
                    <div className="rating text-2xl">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div>
                        <LuEye />
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
}

export default NewsCard;