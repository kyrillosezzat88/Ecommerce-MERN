import { TLoading, TProduct } from "@types";
import ProductCard from "../productCard/ProductCard";

type TProlductListProps = {
  products: TProduct[];
  error: null | string;
  loading: TLoading;
};
const ProductsList = ({ products }: TProlductListProps) => {
  const List = products.map((product: TProduct) => (
    <ProductCard key={product.id} {...product} />
  ));
  return <div className="grid grid-cols-1 md:grid-cols-4 gap-6">{List}</div>;
};

export default ProductsList;
