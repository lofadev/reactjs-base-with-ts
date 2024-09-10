const mediaQuery = (size: number) => `@media screen and (max-width: ${size}px)`;

export const media = {
  small: mediaQuery(600),
  medium: mediaQuery(1024),
  large: mediaQuery(1440),
  xlarge: mediaQuery(1920),
};

export default media;
