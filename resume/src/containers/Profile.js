import react from "react";
import styled from "styled-components";
import { StyledWrapper } from "../StyledComponents/StyledComponents";

const Title = styled.div`
  padding: 100px 0 60px;
  font-size: 40px;
  font-weight: 900;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  padding: 40px;
`;

const Profile = () => {
  return (
    <StyledWrapper>
      <Title>신나리 | RESUME</Title>
      <Container>
        <div className="img">내사진</div>
        <div>
          <div>
            <h3>Contact</h3>
            <p>
              <span>Email.</span> nariri0814@gmail.com
            </p>
            <p>
              <span>Phone.</span> 010 2764 0501
            </p>
          </div>
          <div>
            <h3>Channel</h3>
            <p>
              <span>GitHub.</span>
              <a href="https://github.com/nariri0814" />
            </p>
          </div>
        </div>
      </Container>
    </StyledWrapper>
  );
};

export default Profile;
