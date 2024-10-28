import { RepeatIcon, ShareIcon } from "@assets/icons";

const ProductActions = () => {
  return (
    <div className="flex flex-col gap-4 uppercase mt-4">
      <button className="btn btn-primary uppercase">Add To Cart</button>
      <button className="btn btn-black uppercase">Buy it now</button>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
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
