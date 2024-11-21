import { useAppSelector } from "@store/hooks";
import { useState } from "react";

const useNavbar = () => {
  const { products } = useAppSelector((state) => state.cart);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const handleShowAuthModal = () => {
    setShowAuthModal((prev) => !prev);
  };
  const handleClickUserIcon = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation();
    handleShowAuthModal();
  };
  return { products, showAuthModal, handleShowAuthModal, handleClickUserIcon };
};

export default useNavbar;
