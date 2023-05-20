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

  return (
    <CardSC
      cardstate={cardState}
      color={Icons[iconState]}
      data-test="flashcard"
    >
      {cardState === "closed" && (
        <>
          <p data-test="flashcard-text">Pergunta {index + 1}</p>
          <AnswerButtonSC
            cardstate={cardState}
            disabled={iconState !== -1 && true}
            data-test="play-btn"
            onClick={() => {
              setCardState("turned");
            }}
          >
            <img
              data-test={iconState !== -1 && Icons[iconState].datatest}
              src={iconState === -1 ? arrow : Icons[iconState].icon}
              alt="ArrowGame/Result"
            />
          </AnswerButtonSC>
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
                contAnswered++;
                setAnswered(contAnswered);
                setCardState("closed");
                const temp = [...iconAnswered, 2];
                setIconAnswered(temp);
                setIconState(2);
              }}
            >
              Não lembrei
            </AnswerButtonSC>

            <AnswerButtonSC
              cardstate={cardState}
              bg={Icons[1].color}
              data-test="partial-btn"
              onClick={() => {
                contAnswered++;
                setAnswered(contAnswered);
                setCardState("closed");
                const temp = [...iconAnswered, 1];
                setIconAnswered(temp);
                setIconState(1);
              }}
            >
              Quase não lembrei
            </AnswerButtonSC>

            <AnswerButtonSC
              cardstate={cardState}
              bg={Icons[0].color}
              data-test="zap-btn"
              onClick={() => {
                contAnswered++;
                setAnswered(contAnswered);
                setCardState("closed");
                const temp = [...iconAnswered, 0];
                setIconAnswered(temp);
                setIconState(0);
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
