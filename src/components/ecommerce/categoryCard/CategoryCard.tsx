import { TCategory } from "@types";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ id, name, image }: TCategory) => {
  return (
    <NavLink
      to={`categories/${id}`}
      className="rounded-2xl overflow-hidden relative group"
    >
      <img
        src={image}
        alt={name}
        className=" group-hover:scale-110 transition-all duration-500"
      />
      <span className=" absolute left-1/2 -translate-x-1/2 bottom-4 bg-white rounded-lg text-center px-4 py-2 text-base shadow hover:shadow-none cursor-pointer transition-all duration-300">
        {name}
      </span>
    </NavLink>
  );
};

export default CategoryCard;
