import { NavLink } from "react-router-dom";
import MenuLinks from "./Menu.json";
import { CartIcon, SearchIcon, WishlistIcon, UserIcon, MenuIcon } from "@icons";
import { HeaderCounter } from "@components/ecommerce";

const Navbar = () => {
  return (
    <nav className="py-6 shadow">
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
            <HeaderCounter icon={<CartIcon />} counter={10} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
