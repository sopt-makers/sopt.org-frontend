export function debounce(func: () => void, delay = 300) {
  let timerId: NodeJS.Timeout;

  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func();
    }, delay);
  };
}
