import { useContext } from "react"
import AppContext, { Steps } from "./context/AppContext"
import StartScreen from "./screens/StartScreen/StartScreen";

import styles from './App.module.css';
import { Container } from "@mui/material";
import Heading from "./screens/Heading/Heading";
import Experience from "./screens/Expierience/Experience";
import Education from "./screens/Education/Education";
import Skills from "./screens/Skills/Skills";
import Summary from "./screens/Summary/Summary";

function App({ }) {
  const { step } = useContext(AppContext);

  return <Container maxWidth='lg' className={styles.mainContainer}>
    {step === Steps.Welcome && <StartScreen />}
    {step === Steps.Heading && <Heading />}
    {step === Steps.Experience && <Experience />}
    {step === Steps.Education && <Education />}
    {step === Steps.Skills && <Skills />}
    {step === Steps.Summary && <Summary />}
  </Container>
}

export default App;