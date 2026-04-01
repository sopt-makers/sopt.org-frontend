import { Dialog } from '@sopt-makers/ui';
import { useState } from 'react';
import { ReactComponent as CloseButton } from '@src/assets/icons/ic_close.svg';
import { ReactComponent as Logo } from '@src/assets/mainLogo/logo_38.svg';
import { useIsMobile } from '@src/hooks/useDevice';
import { DESKTOP_DESCRIPTION, MOBILE_DESCRIPTION } from '@src/lib/constants/modal';
import * as S from './style';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobile('768px');

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      {...{ onOpenAutoFocus: (e: Event) => e.preventDefault() }}
    >
      <Dialog.Title>
        <S.Header>
          <Logo />
          <S.CloseButtonWrapper role="button" onClick={() => setIsOpen(false)}>
            <CloseButton />
          </S.CloseButtonWrapper>
        </S.Header>
      </Dialog.Title>
      <S.Divider />
      <Dialog.Description>
        <S.Description>{isMobile ? MOBILE_DESCRIPTION : DESKTOP_DESCRIPTION}</S.Description>
      </Dialog.Description>
    </Dialog>
  );
};

export default Modal;
