export const Condition: React.FunctionComponent<
  React.PropsWithChildren<{ statement?: boolean }>
> = ({ statement, children }) => {
  if (!statement) {
    return null;
  }

  return <>{children}</>;
};
