export const debounce = (cb: () => void, delay = 100) => {
  let timer: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};
