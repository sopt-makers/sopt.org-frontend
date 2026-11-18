import { track } from '@amplitude/analytics-browser';
import styled from '@emotion/styled';
import { useToast } from '@sopt-makers/ui';
import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { api } from '@src/lib/api/instance';
import axios from 'axios';

const NotificationSection = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const { open } = useToast();

  const { mutate: registerNotification, isPending } = useMutation({
    mutationFn: (email: string) =>
      api.post('/notification/register', {
        generation: 39, // 리크루팅 시기 이후 변경되어야 함.
        email,
      }),
    onSuccess: () => {
      if (emailInputRef.current) {
        emailInputRef.current.value = '';
      }
      open({ icon: 'success', content: '알림 신청이 완료되었어요.' });
      setIsRegistered(true);
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        open({ icon: 'alert', content: '이미 신청된 이메일이에요.' });
      } else {
        console.error(error);
        open({ icon: 'error', content: '알림 신청에 실패했어요.' });
      }
    },
  });

  const onRegister = () => {
    if (isPending) return;

    const email = emailInputRef.current?.value;
    if (!email) return;

    registerNotification(email);
  };

  return (
    <Wrapper>
      <div>
        <TitleText>지금은 모집 기간이 아니에요.</TitleText>
        <TitleText>모집 기간이 되면 메일로 알려드릴게요.</TitleText>
      </div>

      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
          onRegister();
        }}
      >
        <Input
          type="email"
          placeholder="메일을 입력해주세요"
          pattern="[a-zA-Z0-9]+([.][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+([.][a-zA-Z]+)*"
          ref={emailInputRef}
          onClick={() => track('click_recruit_notification_input')}
        />
        <SubmitButton
          type="submit"
          value="알림 신청하기"
          disabled={isPending}
          onClick={() => track('click_recruit_notification_apply')}
        />
      </FormWrapper>
      <ConfirmText visible={isRegistered}>신청 완료되었습니다!</ConfirmText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 700px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  padding-top: 90px;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    padding-top: 100px;
    height: 440px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    padding-top: 0;
    height: 440px;
  }
`;

const TitleText = styled.div`
  color: #fcfcfc;
  text-align: center;
  font-family: SUIT;
  font-size: 40rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 30rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    font-size: 20rem;
    font-weight: 800;
  }
`;

const FormWrapper = styled.form`
  width: 100%;
  max-width: 1000px;
  height: 100px;
  background-color: #ffffff24;
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    height: 85px;
    padding: 13px 15px;
    max-width: 639px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    height: 50px;
    padding: 8px 13px;
    max-width: 330px;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  font-family: SUIT;
  font-size: 28rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 42px */
  padding-left: 30px;
  flex: 1;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    font-size: 12rem;
    padding-left: 12px;
  }
`;

const SubmitButton = styled.input`
  border-radius: 50px;
  width: 184px;
  background: #ffffff;
  border: none;
  color: #000;
  cursor: pointer;
  text-align: center;
  font-family: SUIT;
  font-size: 22rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 22px */
  letter-spacing: -0.22px;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    width: 172px;
    font-size: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    width: 99px;
    font-size: 12rem;
  }
`;

const ConfirmText = styled.div<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 22px */
  letter-spacing: -0.22px;
  font-size: 22rem;
  color: rgba(255, 255, 255, 0.5);

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    font-size: 12rem;
  }
`;

export default NotificationSection;
