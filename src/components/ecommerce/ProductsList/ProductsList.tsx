import { TLoading, TProduct } from "@types";
import ProductCard from "../productCard/ProductCard";
import { ProductCardSkeleton } from "@components/feedback/skeletons";

type TProductListProps = {
  products: TProduct[];
  error: null | string;
  loading: TLoading;
};
const ProductsList = ({ products, loading }: TProductListProps) => {
  const List = products.map((product: TProduct) => (
    <ProductCard key={product.id} {...product} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-96">
      {loading == "pending"
        ? Array.from({ length: 4 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))
        : List}
    </div>
  );
};

export default ProductsList;
