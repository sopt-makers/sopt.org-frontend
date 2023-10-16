import Head from 'next/head';

interface HeadProps {
  projectTitle?: string;
  projectID?: string;
  projectImageURL?: string;
}

function HTMLHead(props: HeadProps) {
  const { projectTitle, projectID, projectImageURL } = props;

  return (
    <Head>
      <title>SOPT</title>
      <meta
        name="description"
        content="SOPT는 IT와 벤처 창업에 뜻이 있는 대학생들이 모인 국내 최대 규모의 대학생 연합 IT 벤처 창업 동아리입니다."
      />
      <meta name="title" content="SOPT" />
      <meta name="keyword" content="IT, 창업, 개발, 대학생, 동아리" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="apple-mobile-web-app-title" content="SOPT" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0,  maximum-scale=1"
      />
      <meta content="yes" name="apple-mobile-web-app-capable" />

      {/*  Twitter */}
      <meta name="twitter:title" content="SOPT" />
      <meta name="twitter:description" content="대학생 연합 IT 벤처 창업 동아리" />
      <meta property="twitter:card" content="website" />
      <meta property="twitter:site" content="https://sopt.org/" />
      <meta
        name="twitter:image"
        content="https://s3.ap-northeast-2.amazonaws.com/sopt.org/admin/origin/img_sopt_homepage.png"
      />
      <meta property="twitter:image:alt" content="SOPT 공식 홈페이지 이미지" />

      {/*  Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta
        property="og:url"
        content={projectID ? `https://sopt.org/project/${projectID}` : 'https://sopt.org/'}
      />
      <meta property="og:title" content={projectTitle ? `SOPT 프로젝트 ${projectTitle}` : 'SOPT'} />
      <meta property="og:site_name" content="SOPT 공식 홈페이지" />
      <meta property="og:description" content={'대학생 연합 IT 벤처 창업 동아리'} />
      <meta
        property="og:image"
        content={
          projectImageURL ||
          'https://s3.ap-northeast-2.amazonaws.com/sopt.org/admin/origin/img_sopt_homepage.png'
        }
      />
      <meta property="og:image:alt" content="SOPT 공식 홈페이지 이미지" />
    </Head>
  );
}

export default HTMLHead;
