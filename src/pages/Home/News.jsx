import PropTypes from 'prop-types'
import NewsCard from "../../components/Shared/News/NewsCard";

const News = ({news}) => {

    return (
        <div className='mx-3'>
            <h2 className="text-[#403F3F] font-semibold text-xl">Dragon News Home</h2>
            <div>
                {
                    news.map(elm => <NewsCard key={elm._id} news={elm}></NewsCard>)
                }
            </div>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.array
}

export default News;