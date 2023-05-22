import { useState } from "react";
import { AnswerButtonSC } from "./styled/AnswerButton.styled";
import arrow from "../assets/seta_play.png";
import turn from "../assets/seta_virar.png";

import { CardSC } from "./styled/Card.styled";

export default function Card({
  card,
  Icons,
  index,
  contAnswered,
  setAnswered,
  iconAnswered,
  setIconAnswered,
}) {
  const [cardState, setCardState] = useState("closed");
  const [iconState, setIconState] = useState(-1);
  const [color, setColor] = useState("#333333");

  function cardAnswerd(num) {
    contAnswered++;
    setAnswered(contAnswered);
    setCardState("closed");
    const temp = [...iconAnswered, num];
    setIconAnswered(temp);
    setIconState(num);
    setColor(Icons[num].color);
  }
  
  return (
    <CardSC data-test="flashcard" cardstate={cardState} color={color}>
      {cardState === "closed" && (
        <>
          <p data-test="flashcard-text">Pergunta {index + 1}</p>

          {iconState === -1 && (
            <AnswerButtonSC
              cardstate={cardState}
              data-test="play-btn"
              onClick={() => {
                setCardState("turned");
              }}
            >
              <img src={arrow} alt="ArrowGame" />
            </AnswerButtonSC>
          )}

          {iconState !== -1 && (
            <img
              data-test={iconState !== -1 && Icons[iconState].datatest}
              src={Icons[iconState !== -1 && iconState].icon}
              alt="Result"
            />
          )}
        </>
      )}

      {cardState === "turned" && (
        <>
          <p data-test="flashcard-text">{card.question}</p>
          <AnswerButtonSC
            cardstate={cardState}
            data-test="turn-btn"
            onClick={() => {
              setCardState("answered");
            }}
          >
            <img src={turn} alt="TurnAnswer" />
          </AnswerButtonSC>
        </>
      )}

      {cardState === "answered" && (
        <>
          <p data-test="flashcard-text">{card.answer}</p>
          <div>
            <AnswerButtonSC
              cardstate={cardState}
              bg={Icons[2].color}
              data-test="no-btn"
              onClick={() => {
                cardAnswerd(2);
              }}
            >
              Não lembrei
            </AnswerButtonSC>

            <AnswerButtonSC
              cardstate={cardState}
              bg={Icons[1].color}
              data-test="partial-btn"
              onClick={() => {
                cardAnswerd(1);
              }}
            >
              Quase não lembrei
            </AnswerButtonSC>

            <AnswerButtonSC
              const
              cardstate={cardState}
              bg={Icons[0].color}
              data-test="zap-btn"
              onClick={() => {
                cardAnswerd(0);
              }}
            >
              Zap!
            </AnswerButtonSC>
          </div>
        </>
      )}
    </CardSC>
  );
}
