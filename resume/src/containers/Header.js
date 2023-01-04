import GnbMenu from "../components/GnbMenu";
import {
  Container,
  GnbWrapper,
  Logo,
  Wrapper,
} from "../styledComponents/StyledHeader";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <a href="#top">Nr</a>
        </Logo>
        <GnbWrapper>
          <GnbMenu href="#aboutme" text="ABOUT ME" />
          <GnbMenu href="#introduce" text="INTRODUCE" />
          <GnbMenu href="#career" text="CAREER" />
          <GnbMenu href="#skills" text="SKILLS" />
        </GnbWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
