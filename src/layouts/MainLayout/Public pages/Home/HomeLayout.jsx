import { Outlet } from "react-router";
import Header from "../../../../components/common/Header/Header";
import LatestNews from "../../../../pages/Home/LatestNews";
import Navbar from "../../../../components/common/Navbar/Navbar";

function HomeLayout() {
  return (
    <>
      <Header />
      <main className="w-5/6 mx-auto my-8">
        <LatestNews />
        <Navbar />
        <section className="left_nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="left_nav"></section>
      </main>
    </>
  );
}

export default HomeLayout;
