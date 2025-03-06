import Head from 'next/head';

interface HeadProps {
  projectTitle?: string;
  projectImageURL?: string;
}

function SEO(props: HeadProps) {
  const { projectTitle, projectImageURL } = props;

  return (
    <Head>
      {/*  Twitter */}
      <meta name="twitter:title" content="SOPT" />
      <meta name="twitter:description" content="대학생 연합 IT 벤처 창업 동아리" />
      <meta property="twitter:card" content="website" />
      <meta property="twitter:site" content="https://sopt.org/" />
      <meta
        name="twitter:image"
        content="/36th_og.png"
      />
      <meta property="twitter:image:alt" content="SOPT 공식 홈페이지 이미지" />

      {/*  Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:url" content={'https://sopt.org/'} />
      <meta property="og:title" content={projectTitle ? `SOPT 프로젝트 ${projectTitle}` : 'SOPT'} />
      <meta property="og:site_name" content="SOPT 공식 홈페이지" />
      <meta property="og:description" content={'대학생 연합 IT 벤처 창업 동아리'} />
      <meta
        property="og:image"
        content={
          "/36th_og.png"// ||
          // 'https://s3.ap-northeast-2.amazonaws.com/sopt.org/admin/origin/about/35th/OG+1.png'
        }
      />
      <meta property="og:image:alt" content="SOPT 공식 홈페이지 이미지" />
    </Head>
  );
}

export default SEO;
