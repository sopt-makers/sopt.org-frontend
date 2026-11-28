const SCROLL_EDGE_TOLERANCE = 1;

function getCardStep(list: HTMLElement) {
  const secondCard = list.children[1] as HTMLElement | undefined;
  return secondCard?.offsetLeft ?? list.clientWidth;
}

function getNextScrollLeft(list: HTMLElement, direction: -1 | 1) {
  const maxScrollLeft = list.scrollWidth - list.clientWidth;
  const isAtStart = list.scrollLeft <= SCROLL_EDGE_TOLERANCE;
  const isAtEnd = list.scrollLeft >= maxScrollLeft - SCROLL_EDGE_TOLERANCE;

  if (direction === -1 && isAtStart) return maxScrollLeft;
  if (direction === 1 && isAtEnd) return 0;
  return list.scrollLeft + direction * getCardStep(list);
}

export default function scrollDetailCarousel(list: HTMLElement | null, direction: -1 | 1) {
  if (!list) return;
  list.scrollTo({ left: getNextScrollLeft(list, direction), behavior: 'smooth' });
}
