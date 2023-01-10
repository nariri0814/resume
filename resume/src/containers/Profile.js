import {
  StyledContainer,
  StyledWrapper,
} from "../styledComponents/StyledComponents";
import { ImgBox, Title } from "../styledComponents/StyledProfile";
import myImg from "../img/me.jpg";

const Profile = () => {
  return (
    <StyledWrapper id="aboutme">
      <Title>신나리 | RESUME</Title>
      <StyledContainer justify={"space-around"}>
        <ImgBox>
          <img src={myImg} alt="ShinNa-ri" />
        </ImgBox>
        <div>
          <div>
            <h3>Contact📞</h3>
            <p>
              <span>Email.</span> nariri0814@gmail.com
            </p>
            <p>
              <span>Phone.</span> 010 2764 0501
            </p>
          </div>
          <div>
            <h3>Channel💻</h3>
            <p>
              <span>GitHub.</span>{" "}
              <a
                className="github"
                href="https://github.com/nariri0814"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>https://github.com/nariri0814</span>
              </a>
            </p>
          </div>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Profile;
