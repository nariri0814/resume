import { useRef } from "react";
import Career from "./containers/Career";
import Header from "./containers/Header";
import Introduce from "./containers/Introduce";
import Profile from "./containers/Profile";
import Skills from "./containers/Skills";
import Wave from "./containers/Wave";
import { MainWrapper } from "./styledComponents/StyledComponents";

function App() {
  const homeRef = useRef(null);

  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }} ref={homeRef}>
      <Header onHomeClick={onHomeClick} />
      <Wave />
      <MainWrapper>
        <Profile />
        <Introduce />
        <Career />
        <Skills />
      </MainWrapper>
    </div>
  );
}

export default App;
