import { use } from "react";
import { getCategories } from "../../../features/news/categories";
import { NavLink } from "react-router";

function LeftAside() {
  const categories = use(getCategories);
  const orderedCategories = [
    ...categories.filter((item) => item.name !== "All News"),
    ...categories.filter((item) => item.name === "All News"),
  ];

  return (
    <section className="text-xl">
      <h2 className="mb-5 font-semibold text-primary">All Categories</h2>
      <section className="grid grid-cols-1 gap-2">
        {orderedCategories.map((category) => (
          <NavLink id="category" className={"w-full py-4 text-center text-base-content text-xl font-medium leading-7 rounded-sm hover:bg-base-100 hover:text-primary"} key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>
        ))}
      </section>
    </section>
  );
}

export default LeftAside;
