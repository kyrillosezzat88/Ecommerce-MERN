import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return <div>ProductDetails {id}</div>;
};

export default ProductDetails;
