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

  const handleClickMenu = (e) => {
    console.log(e.target.href.split("#")[1]);
    const elementTop = document.getElementById(e.target.href.split("#")[1]);
    console.log(elementTop);
    window.scrollTo({ top: elementTop, left: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <a href={href} onClick={(e) => handleClickMenu(e)}>
        {text}
      </a>
    </Wrapper>
  );
};

export default GnbMenu;
