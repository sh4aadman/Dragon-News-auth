import { Outlet } from "react-router"
import Header from "../../../../components/common/Header/Header"

function HomeLayout() {
  return (
    <>
          <Header />
          <main>
              <section className="left_nav"></section>
              <section className="main">
                  <Outlet></Outlet>
              </section>
              <section className="left_nav"></section>
          </main>
    </>
  )
}

export default HomeLayout
