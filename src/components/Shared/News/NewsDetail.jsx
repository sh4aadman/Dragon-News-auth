import PropTypes from 'prop-types';
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import EditorsInsight from './EditorsInsight';

const NewsDetail = ({ id, news }) => {

    const newsDetail = news.find(detail => detail._id === id);

    const { category_id, image_url, title, details } = newsDetail

    return (
        <div>
            <div className='border p-7 mt-5'>
                <img src={image_url} alt="news-image" />
                <h2 className='text-2xl font-bold mt-5'>{title}</h2>
                <p className='text-[#706F6F] mt-2'>{details}</p>
                <Link to={`/news/category/${category_id}`}><button className='bg-[#D72050] text-xl text-white py-2 px-6 mt-8 flex gap-1 items-center'><IoArrowBackSharp /> All news in this category</button></Link>
            </div>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

NewsDetail.propTypes = {
    id: PropTypes.string,
    news: PropTypes.array
}

export default NewsDetail;