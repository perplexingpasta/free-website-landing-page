const GridAndDotBg = () => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white bg-grid-black/[0.04]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
};

export default GridAndDotBg;
