import styled from "styled-components";

export const CardSC = styled.div`
  width: clamp(300px, 60%, 80%);
  height: ${({ cardstate }) => (cardstate === "closed" ? "65px" : "150px")};

  background: ${({ cardstate }) =>
    cardstate === "closed" ? "#ffffff" : "#FFFFD4"};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: ${({ cardstate }) =>
    cardstate === "closed" ? "row" : "column"};
  justify-content: ${({ cardstate }) =>
    cardstate === "closed" ? "space-between" : "space-between"};
  align-items: ${({ cardstate }) =>
    cardstate === "closed" ? "center" : "start"};
  position: relative;

  p {
    font-style: normal;
    font-weight: ${({ cardstate }) => (cardstate === "closed" ? "700" : "400")};
    font-size: ${({ cardstate }) => (cardstate === "closed" ? "16px" : "18px")};
    line-height: ${({ cardstate }) =>
      cardstate === "closed" ? "19px" : "22px"};
    text-decoration-line: ${({ iconstate }) =>
      iconstate !== -1 && "line-through"};
    color: ${({ icons, iconstate }) => icons[iconstate] || "#333333"};
    gap: 5px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 0px;
    margin: 0px;
  }
`;
