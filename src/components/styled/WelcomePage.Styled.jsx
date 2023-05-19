import styled from "styled-components";

export const WelcomePageSC = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
  background: #fb6b6b;
  border: 1px solid #dbdbdb;

  img {
    width: 136px;
    height: 161px;
  }

  p {
    font-family: "Righteous", cursive;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;

    color: #ffffff;
  }

  button {
    width: 246px;
    height: 54px;

    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #d70900;
  }
`;
