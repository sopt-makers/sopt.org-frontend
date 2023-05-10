export const ArrowDownAnimation = `
@keyframes ArrowDown {
  from {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@-moz-keyframes ArrowDown {
  from {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@-webkit-keyframes ArrowDown {
  from {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@-o-keyframes ArrowDown {
  from {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
`;
export const ArrowUpAnimation = `
@keyframes ArrowUp {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
}
@-moz-keyframes ArrowUp {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
}
@-webkit-keyframes ArrowUp {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
}
@-o-keyframes ArrowUp {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
}
`;

export const FadeIn = `
@keyframes fadein {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
@-moz-keyframes fadein { /* Firefox */
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
@-o-keyframes fadein { /* Opera */
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
`;

export const FadeOut = `
@keyframes fadeout {
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
      z-index: -1;
  }
}
@-moz-keyframes fadeout { /* Firefox */
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
      z-index: -1;
  }
}
@-webkit-keyframes fadeout { /* Safari and Chrome */
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
      z-index: -1;
  }
}
@-o-keyframes fadeout { /* Opera */
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
      z-index: -1;
  }
}
`;

export const FadeInDown = (stride = 500) => `
  @keyframes fadeindown{
    0%{
      opacity:0;
      transform:translateY(-${stride}px);
    }100%{
      opacity:1;
      transform:translateY(0);
    }
  }
`;

export const FadeOutUp = `
  @keyframes fadeoutup{
    from{
      opacity:1;
    }to{
      opacity:0;
      transform:translateY(-1000px);
      z-index:-1;
    }
  }
`;
