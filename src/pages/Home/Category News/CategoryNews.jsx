import { useParams } from "react-router";

function CategoryNews() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Categorized News</h1>
    </div>
  );
}

export default CategoryNews;
