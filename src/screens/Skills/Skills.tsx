import { Box, Button } from '@mui/material';
import styles from './Skills.module.css';
import { useContext } from 'react';
import AppContext, { Steps } from '../../context/AppContext';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

function Skills() {
  const { fetchedPersonData, updateStep, onRemoveSkill } = useContext(AppContext);

  const { person } = fetchedPersonData;
  const { languages, skills } = person;

  const handleRemoveClick = (type: 'languages' | 'skills', skill: string) => {
    onRemoveSkill(type, skill);
  }


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
        <h3 className={styles.formHeader}>Languages</h3>
        <div className={styles.skillsList}>
          {languages.map(lang => (
            <div className={styles.skill}>
              <Box sx={{ p: 1, border: '1px solid grey', borderRadius: '1rem', minWidth: '10rem' }}>
                {lang}
              </Box>
              <IconButton onClick={() => handleRemoveClick('languages', lang)}>
                <DeleteIcon />
              </IconButton>
            </div>))}
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>Add <AddIcon /></span>
        </div>
      </div>

      <div>
        <h3 className={styles.formHeader}>Skills</h3>
        <div className={styles.skillsList}>
          {skills.map(skill => (
            <div className={styles.skill}>
              <Box sx={{ p: 1, border: '1px solid grey', borderRadius: '1rem', minWidth: '15rem', maxWidth: '20rem' }}>
                {skill}
              </Box>
              <IconButton onClick={() => handleRemoveClick('skills', skill)}>
                <DeleteIcon />
              </IconButton>
            </div>))}
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>Add <IconButton><AddIcon /></IconButton></span>
        </div>
      </div>
    </div>

    <Button variant='contained' color='secondary' style={{ alignSelf: 'flex-end' }} onClick={onSaveHandler}>Save and Next</Button>
  </div>
}

export default Skills;