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

export const wave = keyframes`
  0%  {
    box-shadow:0 0 0 0 transparent,
               0 0 0 0 transparent,
               0 0 0 0 transparent,
               0 0 0 0 transparent;
  }
  15%  {
    box-shadow:0 0 0 0 #d0afc04f,
               0 0 0 0 rgba(255,255,255,0.4),
               0 0 0 0 #d0afc04f,
               0 0 0 0 rgba(205,195,195,0.55);
  }
  100% {
    box-shadow:0 0 30px 190px #d0afc04f,
               0 0 0px 200px transparent,
               0 0 20px 210px #d0afc04f,
               0 0 0px 220px transparent;
  }

`;

export const StyledWave = styled.div`
  position: absolute;
  z-index: 0;
  top: 43%;
  left: 17%;

  display: block;
  border-radius: 50%;
  width: 2px;
  height: 2px;
  animation: ${wave} 6s infinite ease-out;

  ::before,
  ::after {
    content: "";
    display: block;
    width: 2px;
    height: 2px;
    animation: ${wave} 6s infinite ease-out;
    position: absolute;
  }

  ::before {
    animation-delay: 0.2s;
    top: 5px;
    left: 25px;
  }
  ::after {
    animation-delay: 0.8s;
    top: 25px;
    left: 0;
  }
`;

export const StyledMainText = styled.div`
  color: #fff;
  position: absolute;
  top: 35%;
  left: 4%;
  z-index: 2;

  p {
    margin: 0;
  }
  .text {
    font-size: 5.6vw;
    font-weight: 900;
  }
  .border {
    -webkit-text-stroke-width: 1px;
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
