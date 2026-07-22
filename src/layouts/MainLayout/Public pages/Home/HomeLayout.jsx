import { Outlet } from "react-router";
import Header from "../../../../components/common/Header/Header";
import LatestNews from "../../../../components/common/Marquee/LatestNews";
import Navbar from "../../../../components/common/Navbar/Navbar";

function HomeLayout() {
  return (
    <>
      <Header />
      <main className="w-5/6 mx-auto my-8">
        <LatestNews />
        <Navbar />
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default HomeLayout;
