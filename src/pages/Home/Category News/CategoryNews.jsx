import { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { getCategories } from "../../../features/news/categories";
import NewsCard from "../../../features/news/components/NewsCard";

function CategoryNews() {
  const { id } = useParams();
  const data = useLoaderData();
  const categories = use(getCategories);

  const category = categories.find((category) => category.id === id);
  const title = category.name;

  const categorizedNews = data.filter((item) => item.category_id === id);

  const news = id === "0" ? data : categorizedNews;

  return (
    <div>
      <h2 className="font-semibold text-primary text-xl leading-7">{title}</h2>
      <section>
        {news.length === 0 ? (
          <h3 className="mt-5 font-semibold text-primary text-xl leading-7">
            Sorry! There is no news in this category right now.
          </h3>
        ) : (
          news.map((elm) => <NewsCard key={elm._id} news={elm} />)
        )}
      </section>
    </div>
  );
}

export default CategoryNews;
