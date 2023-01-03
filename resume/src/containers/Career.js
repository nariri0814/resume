import react from "react";
import styled from "styled-components";
import {
  StyledTitle,
  StyledWrapper,
} from "../StyledComponents/StyledComponents";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  padding: 40px;
`;

const Career = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Career</StyledTitle>
      <Container>
        <div>경력</div>
      </Container>
    </StyledWrapper>
  );
};

export default Career;
