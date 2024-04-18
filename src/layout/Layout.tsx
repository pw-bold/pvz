import styles from './Layout.module.css';

import AppContext, { Steps } from '../context/AppContext';
import { useContext } from 'react';
import { Button } from '@mui/material';

const Menu = () => {
  const { step: currentStep, updateStep } = useContext(AppContext);
  const steps: Steps[] = [Steps.Welcome, Steps.Heading, Steps.Experience, Steps.Education, Steps.Skills, Steps.Summary];
  return <nav className={styles.menu}>
    <div style={{ height: '5rem'}}>
      <img src='public/resumenow.png' style={{width: 'fit-content', height: '100%'}}/>
    </div>
    <ul>
      {steps.map(step => {
        if (step === Steps.Welcome) {
          return <Button style={{marginBottom: '2rem'}} onClick={() => updateStep(Steps.Welcome)} size='large' variant='outlined' color='primary'>Return Home</Button>
        } else {
          return <li className={`${step === currentStep ? styles.activeStep : ''} ${styles.step}`} key={step}>{step}</li>
        }
      })}
    </ul>
  </nav>
}

function Layout({ children }) {
  const { step: currentStep } = useContext(AppContext);

  return <div className={styles.layout}>
    {currentStep !== Steps.Welcome && <Menu />}
    <div className={styles.main}>
      {children}
    </div>
  </div>
}

export default Layout;