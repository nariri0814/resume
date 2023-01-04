import styled from "styled-components";

export const HeaderHeight = "88px";

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  user-select: none;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: ${HeaderHeight};
  backdrop-filter: blur(15px);
  padding: 0 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  width: 65px;
  height: 65px;
  border: 3px solid #fff;

  color: #fff;
  font-size: 2.4vw;
  font-weight: 900;
  text-align: center;
  line-height: 65px;
  margin-left: 10px;
`;
export const GnbWrapper = styled.div`
  font-size: 21px;
  font-weight: 800;
  display: flex;
`;
