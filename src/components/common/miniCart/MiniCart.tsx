import useCart from "@hooks/useCart";

const MiniCart = () => {
  const { productsFullInfo, error, loading } = useCart();
  return (
    <div className="drawer drawer-end z-30">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white text-base-content min-h-full w-96 p-4">
          {productsFullInfo.map((product) => (
            <h1>{product.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
