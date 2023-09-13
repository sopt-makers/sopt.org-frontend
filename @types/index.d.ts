type Nullable<T> = T | null;

type NonNullableObj<T> = {
  [K in keyof T]-?: T[K];
};

type DataMap<T> = {
  data: T;
};

interface IParentComponentProps {
  className?: string;
  children: ReactChild;
}

declare module 'shortid';

declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
