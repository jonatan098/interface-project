import { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "../../public/ArrowLeftIcon";
import ArrowRightIcon from "../../public/ArrowRight";

import * as S from "./styled";

const Carousel = ({
  children,
  title,
  hideArrows,
  color = {
    regular: "#000",
    onHover: "#fff",
  },
}) => {
  const [childWidth, setChildWidth] = useState(1025);
  const [translateValue, setTranslateValue] = useState(0);
  const [hideArrow, setHideArrow] = useState({
    left: hideArrows || true,
    right: hideArrows || false,
  });

  const ref = useRef();

  const scrollToRight = () => {
    ref.current?.scrollBy({ left: translateValue, behavior: "smooth" });
  };

  const scrollToLeft = () => {
    ref.current?.scrollBy({ left: -translateValue, behavior: "smooth" });
  };

  const renderLeft = () => {
    if (hideArrow.left) return undefined;
    return (
      <S.ArrowLeft
        data-testid="ArrowLeft"
        color={color.regular}
        inverseColor={color.onHover}
        onClick={scrollToLeft}
        data-layer={`{"type": "mkt_carousel", "target": "scroll_left", "title": "${title}"}`}
      >
        <ArrowLeftIcon color={color.onHover} />
      </S.ArrowLeft>
    );
  };

  const getChildWidth = () => {
    let width = 0;
    ref.current?.childNodes.forEach((node) => {
      width += node?.clientWidth;
      if (node.clientWidth !== 40) setTranslateValue(node.clientWidth);
    });
    setChildWidth(width);
  };

  useEffect(() => {
    getChildWidth();
  }, [children]);

  const renderRight = () => {
    if (hideArrow.right || childWidth < 1020) return undefined;
    return (
      <S.ArrowRight
        data-testid="ArrowRight"
        color={color.regular}
        inverseColor={color.onHover}
        onClick={scrollToRight}
        data-layer={`{"type": "mkt_carousel", "target": "scroll_right", "title": "${title}"}`}
      >
        <ArrowRightIcon color={color.onHover} />
      </S.ArrowRight>
    );
  };

  const onScroll = (event) => {
    const { scrollLeft, scrollWidth, offsetWidth } = event.currentTarget;
    setHideArrow({
      left: scrollLeft === 0,
      right:
        scrollLeft === scrollWidth - offsetWidth || childWidth === scrollWidth,
    });
  };

  const renderTitle = () => {
    if (!title) return undefined;

    return <S.Title>{title}</S.Title>;
  };

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollTo({ left: 0 });
    }, 100);
  }, []);

  if (!children) return <div />;

  return (
    <S.Wrapper>
      <S.Header>{renderTitle()}</S.Header>
      <S.Scroll ref={ref} onScroll={onScroll}>
        {renderLeft()}
        {children}
        {renderRight()}
      </S.Scroll>
    </S.Wrapper>
  );
};

export default Carousel;
