type TProductQuantity = {
  price: number;
  quantity: number;
  setQuantity: (
    newQuantity: number | ((prevQuantity: number) => number)
  ) => void;
};

const ProductQuantity = ({
  price,
  quantity,
  setQuantity,
}: TProductQuantity) => {
  const incrementQTY = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrementQTY = () => {
    setQuantity((prev) => prev - 1 || 1);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-between px-6 md:justify-center text-xl border border-gray-300 rounded-lg md:w-1/3">
        <button
          className=" btn btn-ghost hover:bg-gray-100"
          onClick={decrementQTY}
        >
          -
        </button>
        <input
          type="number"
          min={1}
          value={quantity}
          className=" w-14 p-4 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          className=" btn btn-ghost hover:bg-gray-100"
          onClick={incrementQTY}
        >
          +
        </button>
      </div>
      <span className="font-bold text-2xl">
        ${(price * quantity).toFixed(2)}
      </span>
    </div>
  );
};

export default ProductQuantity;
