import styled, { keyframes } from "styled-components";
import mainImg from "../img/mainImg.png";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${mainImg}) no-repeat center / cover;
  position: relative;
  user-select: none;
  font-family: "Cafe24ClassicType-Regular";
`;

export const StyledMainText = styled.div`
  color: #fff;
  position: absolute;
  top: 35%;
  left: 4%;

  p {
    margin: 0;
  }
  .text {
    font-size: 5.6vw;
    font-weight: 900;
  }
  .border {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    -webkit-text-fill-color: transparent;
    line-height: 1;
  }
  .small_text {
    font-size: 2vw;
    font-weight: 500;
    letter-spacing: 2px;
    margin-top: 5px;
  }
`;

export const animation = keyframes`
    0% {
        bottom: 65px;
    }
    50% {
        bottom: 45px;
    }
    100% {
        bottom: 33px;
    }
`;

export const StyledBottom = styled.div`
  height: 140px;
  color: #fff;
  text-align: center;
  transform: translateX(-50%);
  position: absolute;
  bottom: 85px;
  left: 50%;
  animation: ${animation} 0.6s linear alternate infinite;

  .text_box {
    transform: translate(-3px, 85px) rotate(-90deg);
    p {
      font-size: 1.3vw;
      font-weight: 500;
    }
  }
`;
