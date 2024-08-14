import { PropsWithChildren } from 'react';

export type TRoute = {
  path: string;
  component: () => JSX.Element;
  layout?: (({ chilren }: PropsWithChildren) => JSX.Element) | null;
};
