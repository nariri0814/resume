import GnbMenu from "../components/GnbMenu";
import {
  Container,
  GnbWrapper,
  Logo,
  Wrapper,
} from "../styledComponents/StyledHeader";

const Header = (props) => {
  const { onHomeClick, onGnbClick } = props;

  return (
    <Wrapper>
      <Container>
        <Logo>
          <a href="#top" onClick={onHomeClick}>
            Nr
          </a>
        </Logo>
        <GnbWrapper>
          <GnbMenu href="#aboutme" text="ABOUT ME" onClick={onGnbClick} />
          <GnbMenu href="#introduce" text="INTRODUCE" onClick={onGnbClick} />
          <GnbMenu href="#career" text="CAREER" onClick={onGnbClick} />
          <GnbMenu href="#skills" text="SKILLS" onClick={onGnbClick} />
        </GnbWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
