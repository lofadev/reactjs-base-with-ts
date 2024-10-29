import { PropsWithChildren } from 'react';

export type TRoute = {
  path: string;
  component: LazyExoticComponent<() => Element>;
  layout?: (({ chilren }: PropsWithChildren) => JSX.Element) | null;
};
