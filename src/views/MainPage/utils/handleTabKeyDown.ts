import { KeyboardEvent } from 'react';

// 키보드 접근성을 위해 방향키와 Home/End로 탭 포커스와 선택을 함께 이동합니다.
export default function handleTabKeyDown(event: KeyboardEvent<HTMLDivElement>) {
  const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const index = tabs.indexOf(event.target as HTMLButtonElement);
  if (index === -1) return;

  let nextIndex: number;
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      nextIndex = (index + 1) % tabs.length;
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      nextIndex = (index - 1 + tabs.length) % tabs.length;
      break;
    case 'Home':
      nextIndex = 0;
      break;
    case 'End':
      nextIndex = tabs.length - 1;
      break;
    default:
      return;
  }

  event.preventDefault();
  tabs[nextIndex].focus();
  tabs[nextIndex].click();
}
