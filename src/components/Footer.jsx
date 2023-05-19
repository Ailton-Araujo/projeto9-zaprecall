import { FooterSC } from "./styled/Footer.styled";

export default function Footer({ contAnswered, ncards, Icons, iconAnswered }) {
  return (
    <FooterSC>
      <p data-test="footer">
        {contAnswered}/{ncards} CONCLUÍDOS
      </p>
      {iconAnswered.map((item) => {
        return (
          <img
            data-test={Icons[item].datatest}
            src={Icons[item].icon}
            alt={Icons[item].datatest}
          />
        );
      })}
    </FooterSC>
  );
}
