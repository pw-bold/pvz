import useOpenAI from './hooks/useOpenAI';
// import getLinkedinProfile from './utils/getLinkedinProfile';
import { useContext, useEffect } from "react"
import AppContext, { Steps } from "./context/AppContext"
import StartScreen from "./screens/StartScreen/StartScreen";

import styles from './App.module.css';
import { Container } from "@mui/material";
import Heading from "./screens/Heading/Heading";
import Experience from "./screens/Expierience/Experience";
import Education from "./screens/Education/Education";

function App({ }) {
  const { step, setStep } = useContext(AppContext);

  // useEffect(() => {
  //   const responseOfLI = getLinkedinProfile('https://www.linkedin.com/in/pawel-l-wisniewski/');
  //   console.log('responseOfLI:', responseOfLI);
  // }, []);

  

  // const { data } = useOpenAI('{ "startEndDate": { "start": { "month": 8, "year": 2023 } }, "title": "Web Developer", "contractType": "Full-time", "description": "Developing & maintaining websites/applications using:\n- JavaScript/TypeScript\n- React.js \n- Astro.js\n- Keystone.js (CMS)\n- CSS/Sass/POSTCSS\n- Nunjucks", "companyName": "BOLD ", "companyLocation": "Warsaw, Mazowieckie, Poland · Hybrid", "companyLogo": "https://media.licdn.com/dms/image/C560BAQEVXg3MuONCzQ/company-logo_200_200/0/1656690549710/boldlimited_logo?e=1721260800&v=beta&t=GImCLfj1SPP-dE8v-vsmx47fljnHQgWvqCVeed6BBSw", "linkedInUrl": "https://www.linkedin.com/company/10490165/", "linkedInId": "10490165" }');

  return <Container maxWidth='lg' className={styles.mainContainer}>
    {step === Steps.Welcome && <StartScreen />}
    {step === Steps.Heading && <Heading /> }
    {step === Steps.Experience && <Experience />}
    {step === Steps.Education && <Education />}
    
    {/* <button onClick={() => updateStateWithFetchedData('url')}>Fetch</button>

    {fetchedPersonData && <p>{JSON.stringify(fetchedPersonData)}</p>} 
    
    <div>{JSON.stringify(data)}</div>
    */}

  </Container>
}

export default App;