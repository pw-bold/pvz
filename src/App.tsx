import { useContext } from "react"
import AppContext, { Steps } from "./context/AppContext"
import StartScreen from "./screens/StartScreen/StartScreen";

import './App.module.css';

import Heading from "./screens/Heading/Heading";
import Experience from "./screens/Expierience/Experience";
import Education from "./screens/Education/Education";
import Skills from "./screens/Skills/Skills";
import Summary from "./screens/Summary/Summary";
import Layout from "./layout/Layout";
import { CircularProgress } from "@mui/material";

function App({ }) {
  const { step, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
      <CircularProgress size={100} />
    </div>

  }

  return <Layout>
    {step === Steps.Welcome && <StartScreen />}
    {step === Steps.Heading && <Heading />}
    {step === Steps.Experience && <Experience />}
    {step === Steps.Education && <Education />}
    {step === Steps.Skills && <Skills />}
    {step === Steps.Summary && <Summary />}
  </Layout>
}

export default App;