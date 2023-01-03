import react from "react";
import {
  StyledBottom,
  StyledMainText,
  Wrapper,
} from "../StyledComponents/StyledWave";

const Wave = () => {
  return (
    <Wrapper>
      <StyledMainText>
        <p className="text">Resume</p>
        <p className="text border">Resume</p>
        <p className="small_text">Introduce myself</p>
      </StyledMainText>
      <StyledBottom>
        <div className="text_box">
          <p>scroll down</p>
        </div>
      </StyledBottom>
    </Wrapper>
  );
};

export default Wave;
