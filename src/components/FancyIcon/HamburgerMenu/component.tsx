import { combineClassNames } from 'utils/stringManagement/className';

const Component = () => {
  const defaultStyle =
    'block h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute';

  return (
    <div className="w-8 h-8 relative">
      <span
        className={`${defaultStyle} w-8 top-0 group-data-[open]:top-3.5 group-data-[open]:bg-transparent`}
      ></span>
      <span
        className={`${defaultStyle} w-1 top-3.5 rotate-90 left-3.5 group-data-[open]:w-8 group-data-[open]:transform group-data-[open]:rotate-45 group-data-[open]:left-0`}
      ></span>
      <span
        className={`${defaultStyle} w-1 left-3.5 top-3.5 right-0 group-data-[open]:w-8 group-data-[open]:-rotate-45 group-data-[open]:left-0`}
      ></span>
      <span
        className={`${defaultStyle} w-8 bottom-0 top-3.5 group-data-[open]:bottom-3.5 group-data-[open]:bg-transparent`}
      ></span>
      <span
        className={`${defaultStyle} w-8 bottom-0 group-data-[open]:bottom-3.5 group-data-[open]:bg-transparent`}
      ></span>
    </div>
  );
};

export default Component;
