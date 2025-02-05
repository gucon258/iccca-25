import clsx from "clsx";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "h-full mx-auto w-full max-w-[1920px] ", // Adjust the max width to match Full HD
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
