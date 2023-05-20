import styled from "styled-components";

export const AnswerButtonSC = styled.button`
  width: ${({ cardstate }) => (cardstate === "answered" ? "30%" : "")};
  height: 40px;
  border-radius: 5px;
  position: ${({ cardstate }) => cardstate === "turned" && "absolute"};
  right: 15px;
  bottom: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;

  cursor: pointer;
  border: none;
  background: none;
  background: ${({ color }) => color};

  &disabled {
    cursor: not-allowed;
  }
`;
