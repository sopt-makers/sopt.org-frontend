export const getWindowHeight = () => {
  if (typeof window !== 'undefined') {
    if (window.innerHeight) {
      return window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
      return document.documentElement.clientHeight;
    } else if (document.body && document.body.clientHeight) {
      return document.body.clientHeight;
    }
  }
  return 0;
};
