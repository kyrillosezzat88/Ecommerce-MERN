import React, { useState } from "react";
import { TProduct } from "@types";
import {
  ProductActions,
  ProductColors,
  ProductGallery,
  ProductQuantity,
  ProductRate,
  ProductSizes,
} from "@components/ecommerce/productOptions";

const ProductModalContent: React.FC<TProduct> = ({
  name,
  gallery,
  price,
  id,
  isLiked,
  description,
  rate,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="flex gap-6 max-h-1/2 flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2">
        <ProductGallery gallery={gallery} isLiked={isLiked} />
      </div>
      <div className="w-full md:w-1/2 overflow-auto">
        <h1 className="text-xl md:text-3xl font-bold mb-2">{name}</h1>
        <ProductRate rate={rate ?? 0} />
        <div className="badge badge-primary text-sm">Best Seller</div>
        <p className="my-2 py-4 border-gray-200 border-b">{description}</p>
        <ProductColors />
        <ProductSizes />
        <ProductQuantity
          price={price}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <ProductActions id={id} name={name} quantity={quantity} />
      </div>
    </div>
  );
};

export default ProductModalContent;
