import { useState } from "react";
import { GlobalStyle } from "./components/styled/Global";
import logo from "./assets/logo.png";
import cards from "./Cards";
import Icons from "./Data";
import WelcomePage from "./components/WelcomePage";
import RecallPage from "./components/RecallPage";
import Footer from "./components/Footer";

function App() {
  const [begin, setBegin] = useState(false);
  const [contAnswered, setAnswered] = useState(0);
  const [iconAnswered, setIconAnswered] = useState([]);

  return (
    <>
      <GlobalStyle />
      {begin === false && <WelcomePage logo={logo} setBegin={setBegin} />}

      {begin === true && (
        <>
          <RecallPage
            logo={logo}
            cards={cards}
            Icons={Icons}
            contAnswered={contAnswered}
            setAnswered={setAnswered}
            iconAnswered={iconAnswered}
            setIconAnswered={setIconAnswered}
          />
          <Footer
            contAnswered={contAnswered}
            ncards={cards.length}
            Icons={Icons}
            iconAnswered={iconAnswered}
          />
        </>
      )}
    </>
  );
}

export default App;
