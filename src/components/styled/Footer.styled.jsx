import styled from "styled-components";

export const FooterSC = styled.footer`
  width: 100%;
  min-height: 70px;
  padding: 14px 40px;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;

  div {
    display: flex;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-weight: 700;
      }
    }
  }
`;
