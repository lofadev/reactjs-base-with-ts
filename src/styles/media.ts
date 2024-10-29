const mediaQuery = (size: number) => `@media screen and (max-width: ${size}px)`;

export const media = {
  sm: mediaQuery(600),
  md: mediaQuery(1024),
  lg: mediaQuery(1440),
  xl: mediaQuery(1920),
};
