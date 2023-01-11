import { useRef, useState } from "react";
import { useWindowScrollEvent } from "../hooks/useScrollEvent";

import {
  StyledBottom,
  StyledMainText,
  StyledWave,
  Wrapper,
} from "../styledComponents/StyledWave";

const Wave = () => {
  const [animation, setAnimation] = useState(true);
  const areaRef = useRef();

  const handleScrollAnimation = () => {
    const element = areaRef?.current;

    if (!element || !window) {
      return false;
    }

    const { top: elementTop, bottom: elementBottom } =
      element.getBoundingClientRect();

    if (
      animation &&
      elementTop < 0 &&
      elementBottom > 0 &&
      elementTop <= window.innerHeight
    ) {
      setAnimation(false);
      window.scrollTo({ top: elementBottom, left: 0, behavior: "smooth" });
    }

    if (elementBottom < 0 || elementTop === 0) {
      setAnimation(true);
    }
  };

  useWindowScrollEvent(handleScrollAnimation);

  return (
    <Wrapper ref={areaRef}>
      <StyledMainText>
        <p className="text">Resume</p>
        <p className="text border">Resume</p>
        <p className="small_text">Introduce myself</p>
      </StyledMainText>
      <StyledWave />
      <StyledBottom>
        <div className="text_box">
          <p>scroll down</p>
        </div>
      </StyledBottom>
    </Wrapper>
  );
};

export default Wave;
