import {
  StyledContainer,
  StyledTitle,
  StyledWrapper,
} from "../styledComponents/StyledComponents";

const Career = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Career</StyledTitle>
      <StyledContainer justify={"space-around"}>
        <div className="company">
          <h2>(주)아이엠폼</h2>
          <p>2021.8 ~ 2022.10</p>
        </div>
        <div>
          <div>
            <h3>• 쇼핑몰 관리자 사이트(미니파이) 구축</h3>
            <p>
              - React, TypeScript, StyledComponent, Antd, LoopBack, MongoDB,
              Node.js
              <br />
              미니파이는 미니프로그램과 연계하여 판매 관리 및 물류 대행을 해주는
              서비스입니다.
              <br />
              각종 재사용 컴포넌트를 개발하였고, UI/UX 개선을 하였습니다.
              <br />
              또한 saga를 더 가볍고 사용하기 편리한 swr패키지로 바꾸는 등 코드
              개선 작업을 진행하였습니다.{" "}
            </p>
          </div>
          <div>
            <h3>• 위챗의 미니프로그램 개발</h3>
            <p>모듈화된 미니프로그램(약 20개) 개발에 참여했습니다.</p>
          </div>
          <div>
            <h3>• 텐센트 API를 사용하여 에이전시(광고) 사이트 구축</h3>
            <p>
              - React, TypeScript, React-Query, StyledComponent, Antd, MongoDB,
              Nest.js
              <br />
              에이전시는 미니프로그램 광고를 손쉽게 설정할 수 있는 서비스입니다.
              <br />
              텐센트 오픈API를 사용하여 에이전시 사이트를 처음 구축부터
              설계/개발에 참여했습니다.
            </p>
          </div>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Career;
