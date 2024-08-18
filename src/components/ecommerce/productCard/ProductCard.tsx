import { HeartIcon, RepeatIcon } from "@assets/icons";
import { TProduct } from "@types";
const ProductCard = ({ name, mainImage, gallery, price }: TProduct) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative cursor-pointer group overflow-hidden rounded-2xl">
        <img src={mainImage} alt={name} className="z-10" />
        {gallery && gallery.length && (
          <img
            className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            src={gallery[0]}
            alt={name}
          />
        )}
        <span className="uppercase absolute top-3 left-3 bg-primary rounded-full text-sm px-3 py-1">
          new
        </span>
        {/* actions  buttons */}
        <div className="flex gap-3 absolute transition-all duration-300 -bottom-20 group-hover:bottom-3 items-center justify-center w-full">
          <button className="btn btn-primary rounded-full btn-md">
            {/* <span className="loading loading-spinner"></span>  */}
            Add to cart
          </button>
          <button className="btn btn-base-100 rounded-full btn-md">
            {/* <span className="loading loading-spinner"></span> */}
            Quick view
          </button>
        </div>
        <div className="flex flex-col gap-2 absolute -right-10 top-3 transition-all duration-300 group-hover:right-3">
          <button className="btn btn-circle btn-sm [&>svg]:w-4">
            <HeartIcon />
          </button>
          <button className="btn btn-circle btn-sm [&>svg]:w-4">
            <RepeatIcon />
          </button>
        </div>
      </div>
      <h2 className="font-semibold">{name}</h2>
      <div className="flex items-center gap-4">
        <span>${price}</span>
        <span className="text-sm text-gray-400 line-through">$36</span>
        <span className="bg-primary text-sm px-3 py-1 rounded-full">-22%</span>
      </div>
    </div>
  );
};

export default ProductCard;
