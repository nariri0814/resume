import Career from "./containers/Career";
import Header from "./containers/Header";
import Introduce from "./containers/Introduce";
import Profile from "./containers/Profile";
import Skills from "./containers/Skiils";
import Wave from "./containers/Wave";
import { MainWrapper } from "./styledComponents/StyledComponents";

function App() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
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
