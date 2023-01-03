import react from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 10px;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  a {
    padding: 10px 0;
  }
  &:hover .square {
    transform: scaleY(1);
  }
`;

const GnbMenu = (props) => {
  const { href, text } = props;

  return (
    <Wrapper>
      <a href={href}>{text}</a>
    </Wrapper>
  );
};

export default GnbMenu;
