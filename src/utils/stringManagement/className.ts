export const combineClassNames = (
  prefix: string = '',
  classNames: string[],
): string => {
  return classNames.map(className => `${prefix}${className}`).join(' ');
};
