import Script from 'next/script';

export default function KakaoScript() {
  function handleOnLoad() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    console.log(window.Kakao.isInitialized());
  }

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
      integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01"
      crossOrigin="anonymous"
      onLoad={handleOnLoad}
    ></Script>
  );
}
