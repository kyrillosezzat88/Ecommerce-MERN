import { NavLink } from "react-router-dom";
import MenuLinks from "./Menu.json";
import { CartIcon, SearchIcon, WishlistIcon, UserIcon, MenuIcon } from "@icons";
import { HeaderCounter } from "@components/ecommerce";
import MiniCart from "../miniCart/MiniCart";
import { useAppSelector } from "@store/hooks";

const Navbar = () => {
  const { products } = useAppSelector((state) => state.cart);
  return (
    <nav className="py-6 absolute inset-0 md:h-[74px] h-[56px] bg-transparent">
      <MiniCart />
      <div className="container">
        <div className="flex items-center justify-between">
          <MenuIcon className="md:hidden" />
          <div className="flex items-center gap-12">
            <h1 className="font-bold text-xl md:text-3xl pb-1 border-b-2 border-white">
              Anvogue
            </h1>
            <ul className="hidden md:flex gap-3 items-center">
              {MenuLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.url}
                  className={({ isActive }) =>
                    `uppercase text-sm font-bold pb-1 border-b-2 transition-all ${
                      isActive ? "border-black" : "border-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 items-center">
            <SearchIcon className="hidden md:block" />
            <UserIcon />
            <HeaderCounter
              icon={<WishlistIcon />}
              counter={0}
              className="hidden md:block"
            />
            <HeaderCounter
              icon={<CartIcon />}
              counter={products.reduce(
                (total, product) => total + product.quantity,
                0
              )}
              type="drawer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
