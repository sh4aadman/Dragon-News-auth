import { useLoaderData } from "react-router";
import NewsCard from "../../../features/news/components/NewsCard";

function News() {
  const news = useLoaderData();

  return (
    <section>
      <h2 className="font-semibold text-primary text-xl">Dragon News Home</h2>
      {news.map((elm) => (
        <NewsCard key={elm._id} news={elm} />
      ))}
    </section>
  );
}

export default News;
