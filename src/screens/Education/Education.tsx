import { Button, TextField } from '@mui/material';
import styles from './Education.module.css';
import { useContext } from 'react';
import AppContext, { Steps } from '../../context/AppContext';

function Education({ }) {
  const { fetchedPersonData, updateStep, updateEducationInfo } = useContext(AppContext);

  const { educationHistory } = fetchedPersonData.person.schools;

  const onChangeHandler = (idx, key, value) => {
    updateEducationInfo(idx, key, value)
  }

  const onSaveHandler = () => {
    updateStep(Steps.Skills);
  }


  return <div className={styles.headingWrapper}>
    <div className={styles.heading}>
      <h1>Tell us about your education</h1>
      <p>Enter your education experience so far, even if you are a current student or did not graduate.</p>
    </div>
    <div className={styles.contentWrapper}>

      {educationHistory.map((edu, idx) => (
        <form className={styles.form}>
          <div className={styles.formEntry}>
            <TextField label='School Name' name='schoolName' fullWidth value={edu.schoolName}
              onChange={(e) => onChangeHandler(idx, e.target.name, e.target.value)}
            />
          </div>
          <div className={styles.formEntry}>
            <TextField label='Degree' name='degreeName' value={[edu.degreeName]} fullWidth
              onChange={(e) => onChangeHandler(idx, e.target.name, e.target.value)}
            />
          </div>
          <div className={styles.formEntry}>
            {edu.fieldOfStudy && <TextField onChange={(e) => onChangeHandler(idx, e.target.name, e.target.value)} placeholder='e.g. Business Administration' label='Field Of Study' name='fieldOfStudy' value={edu.fieldOfStudy} fullWidth />}
            <TextField type='text' placeholder='End Date' label='End Date' value={edu.startEndDate.end?.year} />
          </div>
        </form>
      ))}
    </div>
    <Button variant='contained' color='secondary' style={{ alignSelf: 'flex-end' }} onClick={onSaveHandler}>Save and Next</Button>
  </div>
}

export default Education;