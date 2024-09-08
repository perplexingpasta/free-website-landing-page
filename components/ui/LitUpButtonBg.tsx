const LitUpButtonBg = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative rounded-lg p-3" onClick={handleClick}>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purpledark" />
      <div
        className={`group relative inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-black-100 bg-transparent px-5 py-2 font-montserrat text-sm font-semibold uppercase text-white transition duration-300 ease-in-out hover:italic md:text-lg ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default LitUpButtonBg;
