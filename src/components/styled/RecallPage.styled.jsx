import styled from "styled-components";

export const RecallPageSC = styled.main`
  width: 100%;
  background-color: #fb6b6b;
  border: 1px solid #dbdbdb;

  span {
    padding: 45px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img {
      width: 52px;
      height: 60px;
    }
    p {
      font-family: "Righteous", cursive;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: -0.012em;
      color: #ffffff;
      transform: rotate(0.58deg);
    }
  }

  section {
    padding: 0 40px;
    padding-bottom: ${({ contanswered, ncards }) => contanswered === ncards ? "175px" : "70px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div {
    margin: 20px 0px;
    padding: 10px;
  }
`;
