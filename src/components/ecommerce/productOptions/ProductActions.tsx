import { RepeatIcon, ShareIcon } from "@assets/icons";
import useProductCard from "@hooks/useProductCard";

type TProductActions = {
  id: number;
  name: string;
  quantity: number;
};

const ProductActions = ({ id, name, quantity }: TProductActions) => {
  const { addProductHandler, compareHandler } = useProductCard(
    id,
    name,
    quantity
  );
  return (
    <div className="flex flex-col gap-4 uppercase mt-4">
      <button className="btn btn-primary uppercase" onClick={addProductHandler}>
        Add To Cart
      </button>
      <button className="btn btn-black uppercase">Buy it now</button>
      <div className="flex justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={compareHandler}
        >
          <button className="btn btn-sm btn-circle">
            <RepeatIcon />
          </button>
          <span>Compare</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn btn-sm btn-circle">
            <ShareIcon />
          </button>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
