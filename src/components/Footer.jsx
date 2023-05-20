import iconRight from "../assets/party.png";
import iconWrong from "../assets/sad.png";

import { FooterSC } from "./styled/Footer.styled";

export default function Footer({ contAnswered, ncards, Icons, iconAnswered }) {
  return (
    <FooterSC data-test="footer">
      {contAnswered === ncards && !iconAnswered.includes(2) && (
        <section data-test="finish-text">
          <p><span><img src={iconRight} alt="iconRight" /></span><strong>     Parabéns!</strong></p>
          <p>Você não esqueceu de nenhum flashcard!</p>
        </section>
      )}

      {contAnswered === ncards && iconAnswered.includes(2) && (
        <section data-test="finish-text">
          <div>
            <img src={iconWrong} alt="iconWrong" />
            <p>Putz...</p>
          </div>
          <p>Ainda faltam alguns... Mas não desanime!</p>
        </section>
      )}

      <p>
        {contAnswered}/{ncards} CONCLUÍDOS
      </p>
      <div>
        {iconAnswered.map((item, index) => {
          return (
            <img
              key={index}
              data-test={Icons[item].datatest}
              src={Icons[item].icon}
              alt={Icons[item].datatest}
            />
          );
        })}
      </div>
    </FooterSC>
  );
}
