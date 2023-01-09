import {
  StyledContainer,
  StyledTitle,
  StyledWrapper,
} from "../styledComponents/StyledComponents";

const Introduce = () => {
  return (
    <StyledWrapper>
      <StyledTitle id="introduce">Introduce</StyledTitle>
      <StyledContainer>
        <div>
          안녕하세요:) Node.js, React.js, TypeScript, JavaScript 기반의 1년 차
          프론트엔드 개발자입니다.
          <br />웹 퍼블리셔 공부부터 시작해 프론트엔드 개발자의 길을 걷고 있는,
          끝까지 파고드는 개발자 신나리입니다.
          <br />
          <br />
          주로 React를 사용하여 웹을 만듭니다.
          <br />
          재사용 로직을 분리하기 위해 커스텀 Hooks를 자유롭게 활용합니다.
          <br />
          SWR, React Query 등 React 생태계의 최신 기술을 잘 활용합니다.
          <br />
          <br />- 웹 개발/배포/운영 경험
          <br />- 다양한 라이브러리 사용
          <br />- React 프로젝트 고도화 작업
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Introduce;
