import react from "react";
import GnbMenu from "../components/GnbMenu";
import {
  Container,
  GnbWrapper,
  Logo,
  Wrapper,
} from "../StyledComponents/StyledHeader";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <a href="#top">Nr</a>
        </Logo>
        <GnbWrapper>
          <GnbMenu href="#aboutme" text="ABOUT ME" />
          <GnbMenu href="#skills" text="SKILLS" />
          <GnbMenu href="#works" text="WORKS" />
          <GnbMenu href="#contact" text="CONTACT" />
        </GnbWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
