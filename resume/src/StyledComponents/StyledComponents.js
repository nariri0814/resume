import styled from "styled-components";
import mainImg from "../img/mainImg.png";

export const MainWrapper = styled.div`
  position: relative;
  padding-bottom: 40px;

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background: url(${mainImg}) center / cover;
    filter: blur(5px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scale(1.1);
  }
`;

export const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
export const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #000647;
  padding: 50px 10px 10px;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify || "flex-start"};
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  padding: 40px;
  .github {
    color: #b24d6e;
    span {
      border-bottom: 1px solid;
    }
  }
  .company {
    text-align: center;
  }

  .skills {
    img {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;
