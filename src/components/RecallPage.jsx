import { RecallPageSC } from "./styled/RecallPage.styled";
import Card from "./Card";

export default function RecallPage({
  cards,
  Icons,
  contAnswered,
  setAnswered,
  iconAnswered,
  setIconAnswered,
}) {
  return (
    <RecallPageSC>
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
