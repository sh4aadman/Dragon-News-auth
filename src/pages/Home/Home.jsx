import Header from "../../components/Shared/Home/Header";
import Navbar from "../../components/Shared/Home/Navbar";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl">Home</h2>
        </div>
    );
};

export default Home;