export const combineClassNames = (
  prefix: String = '',
  classNames: String[],
): string => {
  return classNames.map(className => `${prefix}${className}`).join(' ');
};
