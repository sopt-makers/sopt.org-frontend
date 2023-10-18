import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      mainColor: string;
      mainBannerColor: string;
      soptWhite: string;
      black40: string;
    };
  }
}
