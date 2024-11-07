type THeaderCounter = {
  icon: React.ReactNode;
  counter: number;
  className?: string;
  type?: string;
};

const HeaderCounter = ({
  icon,
  counter,
  className = "",
  type,
}: THeaderCounter) => {
  const Wrapper = type === "drawer" ? "label" : "div";
  const wrapperProps =
    type === "drawer"
      ? {
          htmlFor: "my-drawer-4",
          className: `relative drawer-button ${className}`,
        }
      : { className: `relative ${className}` };

  return (
    <Wrapper {...wrapperProps}>
      {icon}
      <span className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-black text-white flex justify-center items-center text-xs p-1">
        {counter}
      </span>
    </Wrapper>
  );
};

export default HeaderCounter;
