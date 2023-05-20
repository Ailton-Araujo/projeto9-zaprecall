import { RecallPageSC } from "./styled/RecallPage.styled";
import Card from "./Card";

export default function RecallPage({
  logo,
  cards,
  Icons,
  contAnswered,
  setAnswered,
  iconAnswered,
  setIconAnswered,
}) {
  return (
    <RecallPageSC contanswered={contAnswered} ncards={cards.length}>
      <span>
        <img src={logo} alt="Logo" />
        <p>ZapRecall</p>
      </span>
      <section>
        {cards.map((card, index) => {
          return (
            <Card
              key={card.id}
              index={index}
              card={card}
              Icons={Icons}
              contAnswered={contAnswered}
              setAnswered={setAnswered}
              iconAnswered={iconAnswered}
              setIconAnswered={setIconAnswered}
            />
          );
        })}
      </section>
    </RecallPageSC>
  );
}
