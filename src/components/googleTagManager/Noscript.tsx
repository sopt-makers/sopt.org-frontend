/* eslint-disable jsx-a11y/iframe-has-title */
export default function GoogleTagManagerNoscript() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MMRTRSV"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  );
}
