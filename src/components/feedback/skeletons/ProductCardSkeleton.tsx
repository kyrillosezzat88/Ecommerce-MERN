import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton width={300} height={310} style={{ borderRadius: "10px" }} />
      <Skeleton width={100} />
      <div className="flex gap-4">
        <Skeleton width={50} />
        <Skeleton width={50} />
        <Skeleton width={50} />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
