type THeaderCounter = {
  icon: React.ReactNode;
  counter: number;
  className?: string;
};
const HeaderCounter = ({ icon, counter, className }: THeaderCounter) => {
  return (
    <div className={`relative ${className}`}>
      {icon}
      <span className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-black text-white flex justify-center items-center text-xs p-1">
        {counter}
      </span>
    </div>
  );
};

export default HeaderCounter;
