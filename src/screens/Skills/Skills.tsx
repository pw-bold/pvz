import { Button, TextField } from '@mui/material';
import styles from './Skills.module.css';
import { useContext } from 'react';
import AppContext, { Steps } from '../../context/AppContext';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

function Skills({ }) {
  const { fetchedPersonData, updateStep } = useContext(AppContext);
  const { person } = fetchedPersonData;

  console.log(person);

  const { languages, skills } = person;


  const onSaveHandler = () => {
    updateStep(Steps.Summary);
  }


  return <div className={styles.headingWrapper}>
    <div className={styles.heading}>
      <h1>What skills would you like to highlight?</h1>
      <p>Choose from our pre-written examples below or write your own.</p>
    </div>
    <div className={styles.contentWrapper}>
      <div>
        <h3>Languages</h3>
        <form className={styles.form}>
          {languages.map(lang => (<div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}><TextField key={lang} value={lang} name={lang} /><IconButton><DeleteIcon /></IconButton></div>))}
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>Add <AddIcon /></span>
        </form>
      </div>
      <div>
        <h3>Skills</h3>
        <form className={styles.form}>
          {skills.map(skill => (<div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}><TextField key={skill} value={skill} name={skill} /><IconButton><DeleteIcon /></IconButton></div>))}
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>Add <IconButton><AddIcon /></IconButton></span>
        </form>
      </div>
    </div>

    <Button variant='contained' color='secondary' style={{ alignSelf: 'flex-end' }} onClick={onSaveHandler}>Save and Next</Button>
  </div>
}

export default Skills;