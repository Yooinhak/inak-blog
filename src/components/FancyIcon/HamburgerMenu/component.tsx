import { combineClassNames } from 'utils/stringManagement/className';

const Component = () => {
  const defaultStyle =
    'block h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute';

  return (
    <div className="w-8 h-8 relative">
      <span
        className={`${defaultStyle} w-8 top-0 ${combineClassNames('group-data-[open]:', ['top-3.5', 'bg-transparent'])}`}
      ></span>
      <span
        className={`${defaultStyle} w-1 top-3.5 rotate-90 left-3.5 ${combineClassNames('group-data-[open]:', ['w-8', 'transform', 'rotate-45', 'left-0'])}`}
      ></span>
      <span
        className={`${defaultStyle} w-1 left-3.5 top-3.5 right-0 ${combineClassNames('group-data-[open]:', ['w-8', '-rotate-45', 'left-0'])}`}
      ></span>
      <span
        className={`${defaultStyle} w-8 bottom-0 top-3.5 ${combineClassNames('group-data-[open]:', ['bottom-3.5', 'bg-transparent'])}`}
      ></span>
      <span
        className={`${defaultStyle} w-8 bottom-0 ${combineClassNames('group-data-[open]:', ['bottom-3.5', 'bg-transparent'])}`}
      ></span>
    </div>
  );
};

export default Component;
