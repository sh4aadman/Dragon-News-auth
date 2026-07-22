const getData = async () => {
  const response = await fetch("/categories.json");
  return response.json();
};

const getCategories = getData();

export { getCategories };
