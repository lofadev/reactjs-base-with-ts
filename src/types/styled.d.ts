import 'styled-components';
import { TTheme } from '~/styles';

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
