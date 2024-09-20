import useCategories from "@hooks/useCategories";
import CategoryCard from "../categoryCard/CategoryCard";
import { CategoryCardSkeleton } from "@components/feedback/skeletons";

const CategoriesList = () => {
  const { loading, categories } = useCategories();

  const List = categories.map((category) => <CategoryCard {...category} />);

  return (
    <>
      <h1 className="title">Explore Collections</h1>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-6 min-h-96">
        {loading === "pending"
          ? Array.from({ length: 4 }).map((_, idx) => (
              <CategoryCardSkeleton key={idx} />
            ))
          : List}
      </div>
    </>
  );
};

export default CategoriesList;
