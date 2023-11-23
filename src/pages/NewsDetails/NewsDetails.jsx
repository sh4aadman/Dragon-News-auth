import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/Shared/Home/Header";
import RightSideNav from "../../components/Shared/Home/RightSideNav";
import NewsDetail from "../../components/Shared/News/NewsDetail";

const NewsDetails = () => {

    const {id} = useParams();
    const news = useLoaderData();

    console.log(news)

    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <div className="grid grid-cols-4 mt-7 gap-6">
                <div className="col-span-3">
                    <h2 className="text-xl font-semibold">Dragon News</h2>
                    <NewsDetail id={id} news={news}></NewsDetail>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;