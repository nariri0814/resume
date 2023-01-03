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

const Introduce = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Introduce</StyledTitle>
      <Container>
        <div>내 소개</div>
      </Container>
    </StyledWrapper>
  );
};

export default Introduce;
