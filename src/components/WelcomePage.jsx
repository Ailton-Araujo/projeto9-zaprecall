import { WelcomePageSC } from "./styled/WelcomePage.Styled";
export default function WelcomePage({ logo, setBegin }) {
  return (
    <WelcomePageSC>
      <img src={logo} alt="Logo" />
      <p>ZapRecall</p>
      <button
        data-test="start-btn"
        onClick={() => {
          setBegin(true);
        }}
      >
        Iniciar Recall!
      </button>
    </WelcomePageSC>
  );
};
