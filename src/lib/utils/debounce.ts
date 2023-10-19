export function debounce(func: () => void, delay = 100) {
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
