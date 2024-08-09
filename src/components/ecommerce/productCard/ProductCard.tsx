import { TProduct } from "@types";

const ProductCard = ({ name, mainImage, gallery, price }: TProduct) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <img src={mainImage} alt={name} className="rounded-2xl" />
        {gallery && gallery.length && (
          <img
            className="rounded-2xl absolute inset-0"
            src={gallery[0]}
            alt={name}
          />
        )}
        <span className="uppercase absolute top-3 left-3 bg-primary rounded-full text-sm px-3 py-1">
          new
        </span>
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
