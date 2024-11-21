import { ProductQuantity } from "@components/ecommerce/productOptions";
import useCart from "@hooks/useCart";
import EmptyCart from "@images/empty-cart.png";
import { NavLink } from "react-router-dom";

const MiniCart = () => {
  const { productsWithQty, SubTotal, error, loading, actDeleteProduct } =
    useCart();

  return (
    <div className="drawer drawer-end z-30">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white text-base-content min-h-full w-2/3 md:w-1/3 p-4 flex flex-col gap-4">
          <div className=" sticky top-0 bg-white shadow-sm py-2 flex justify-between items-center">
            <h1 className="font-bold text-2xl">Shopping Cart</h1>
            <span>X</span>
          </div>

          {productsWithQty.length ? (
            <>
              <p className="bg-primary rounded p-4 mb-3">
                Buy <strong>$95</strong> more to get free shipping
              </p>
              {productsWithQty.map((product) => (
                <div key={product.id}>
                  <div className="flex gap-3 mb-4">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-md overflow-hidden object-contain object-top"
                    />
                    <div className="flex justify-between w-full px-2">
                      <h3 className="font-bold">{product.name}</h3>
                      <div className="flex flex-col gap-4">
                        <span className="font-bold self-end">
                          ${product.price}
                        </span>
                        <span
                          className="text-red-400 underline self-end cursor-pointer"
                          onClick={() => actDeleteProduct(product.id)}
                        >
                          Remove
                        </span>
                        <ProductQuantity
                          quantity={
                            productsWithQty.find((pro) => pro.id === product.id)
                              ?.quantity ?? 1
                          }
                          price={product.price}
                          productId={product.id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-auto">
                <div className="flex justify-between">
                  <span className="text-3xl">Subtotal</span>
                  <span className="font-bold">${SubTotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="btn bg-black text-white w-full">
                  Checkout
                </button>
                <button className="btn btn-primary w-full">View Cart</button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <img src={EmptyCart} alt="Empty cart" height={300} />
              <p className="text-3xl">Your cart is empty</p>
              <NavLink to="/shop" className="btn btn-primary">
                Return to Shopping
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
