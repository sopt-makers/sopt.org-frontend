export const sanitizeImageUrl = (url: string): string => {
  if (/^(https?:\/\/)/.test(url)) return url;
  if (/^(\/\/)/.test(url)) return 'https:' + url;
  else return 'https://' + url;
};
