import { Outlet } from "react-router";
import LeftAside from "../../components/common/Left Aside/LeftAside";
import RightAside from "../../components/common/Right Aside/RightAside";
import { Suspense } from "react";
import Loading from "../../components/ui/Loading/Loading";

function Home() {
  return (
    <section className="ml-4 grid grid-cols-12 gap-8">
      <aside className="col-span-3">
        <Suspense fallback={<Loading />}>
          <LeftAside />
        </Suspense>
      </aside>
      <main className="col-span-6">
        <Outlet></Outlet>
      </main>
      <aside className="col-span-3">
        <RightAside />
      </aside>
    </section>
  );
}

export default Home;
