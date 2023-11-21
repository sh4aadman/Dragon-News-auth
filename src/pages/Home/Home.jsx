import Header from "../../components/Shared/Home/Header";
import LeftSideNav from "../../components/Shared/Home/LeftSideNav";
import Navbar from "../../components/Shared/Home/Navbar";
import RightSideNav from "../../components/Shared/Home/RightSideNav";
import BreakingNews from "./BreakingNews";
import News from "./News";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 mt-16">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <News></News>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;