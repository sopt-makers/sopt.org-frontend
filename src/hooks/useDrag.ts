import { useRef, useState } from 'react';

function useDrag() {
  const dragRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [clickPoint, setClickPoint] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    if (dragRef.current) {
      setClickPoint(e.pageX);
      setScrollLeft(dragRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    e.preventDefault();
    if (dragRef.current) {
      const draggedAmount = e.pageX - clickPoint;
      dragRef.current.scrollLeft = scrollLeft - draggedAmount;
    }
  };

  const initDragging = () => {
    setDragging(false);
  };

  return { dragRef, handleMouseDown, handleMouseMove, initDragging };
}

export default useDrag;
