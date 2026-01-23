import { track } from '@amplitude/analytics-browser';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { BASE_URL, DEFAULT_TIMEOUT } from '@src/lib/constants/client';
import axios from 'axios';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const NotificationSection = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const onRegister = async () => {
    try {
      if (isLoading) return;
      const email = emailInputRef.current?.value;
      if (!email) return;
      setIsLoading(true);
      const result = await client.post('/notification/register', {
        generation: 36, // 리크루팅 시기 이후 변경되어야 함.
        email,
      });
      if (result.status === 201) {
        if (emailInputRef.current?.value) {
          emailInputRef.current.value = '';
        }
        setIsRegistered(true);
      }
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
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
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    padding-top: 100px;
    height: 440px;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
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
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    font-size: 30rem;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
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
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    height: 85px;
    padding: 13px 15px;
    max-width: 639px;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
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
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    font-size: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
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
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    width: 172px;
    font-size: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
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
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    font-size: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 12rem;
  }
`;

export default NotificationSection;
