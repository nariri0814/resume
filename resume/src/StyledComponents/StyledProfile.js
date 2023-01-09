import styled from "styled-components";

export const Title = styled.div`
  padding: 100px 0 60px;
  font-size: 40px;
  font-weight: 900;
  font-family: "Cafe24ClassicType-Regular";
  color: #000647;
`;

export const ImgBox = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  transform: scale(1);
  img {
    width: 100%;
  }
  &:hover img {
    transition: transform 0.2s linear;
    transform: scale(1.1);
  }
`;
