import logoSrc from './logo.svg';
import './App.css';
import { useLanguage } from "./contexts/LanguageContext";

function App() {
  const { t } = useLanguage();
  const logo = t("logo"); // logo
  const edit = t("edit"); // edit
  const and = t("and"); // and
  const saveToReload = t("saveToReload"); //  save to reload
  const learnReact = t("learnReact"); //  Learn React

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoSrc} className="App-logo" alt={logo} />
        <p>
          {edit} <code>src/App.js</code> {and} {saveToReload}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {learnReact}
        </a>
      </header>
    </div>
  );
}

export default App;
