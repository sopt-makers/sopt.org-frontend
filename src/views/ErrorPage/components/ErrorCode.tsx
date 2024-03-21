import { Ic404Back, Ic404Front, Ic404Ghost, Ic500Back, Ic500Cone, Ic500Front } from '../assets';

interface ErrorCodeProps {
  code: number;
}
export default function ErrorCode({ code }: ErrorCodeProps) {
  return code === 404 ? (
    <>
      <Ic404Front />
      <Ic404Ghost />
      <Ic404Back />
    </>
  ) : (
    <>
      <Ic500Front />
      <Ic500Cone />
      <Ic500Back />
    </>
  );
}
