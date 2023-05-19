import { useState } from "react";

import arrow from "../assets/seta_play.png";
import turn from "../assets/seta_virar.png"

import { CardSC } from "./styled/Card.styled";

export default function Card({ card, Icons, index, contAnswered, setAnswered, iconAnswered, setIconAnswered }) {
  const [cardState, setCardState] = useState("closed");

  return (
    <CardSC data-test="flashcard">
      {cardState === "closed" && (
        <>
          <p data-test="flashcard-text">Pergunta {index + 1}</p>
          <button
            data-test="play-btn"
            onClick={() => {
              setCardState("turned");
            }}
          >
            <img src={arrow} alt="ArrowGame" />
          </button>
        </>
      )}

      {cardState === "turned" && (
        <>
          <p data-test="flashcard-text">{card.question}</p>
          <button
            data-test="turn-btn"
            onClick={() => {
              setCardState("answered");
            }}
          >
            <img src={turn} alt="TurnAnswer" />
          </button>
        </>
      )}

      {cardState === "answered" && (
        <>
          <p data-test="flashcard-text">{card.answer}</p>


          <button
            data-test="play-btn"
            onClick={() => {
              contAnswered++
              setAnswered(contAnswered)
              setCardState("closed");
              let temp = [...iconAnswered,2]
              setIconAnswered(temp)
            }}
          >
            <img data-test={Icons[2].datatest} src={Icons[2].icon} alt="WrongAnswer" />
          </button>


          <button
            data-test="play-btn"
            onClick={() => {
              contAnswered++
              setAnswered(contAnswered)
              setCardState("closed");
              let temp = [...iconAnswered,1]
              setIconAnswered(temp)
            }}
          >
            <img data-test={Icons[1].datatest} src={Icons[1].icon} alt="AlmostAnswer" />
          </button>


          <button
            data-test="play-btn"
            onClick={() => {
              contAnswered++
              setAnswered(contAnswered)
              setCardState("closed");
              let temp = [...iconAnswered,0]
              setIconAnswered(temp)
            }}
          >
            <img data-test={Icons[0].datatest} src={Icons[0].icon} alt="RightAnswer" />
          </button>
        </>
      )}
    </CardSC>
  );
}
