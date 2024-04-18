import { Button, TextField, Checkbox } from '@mui/material';
import styles from './Experience.module.css';
import { useContext } from 'react';
import AppContext, { Steps } from '../../context/AppContext';

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Experience({ }) {
  const { fetchedPersonData, updateStep, updateExperienceInfo } = useContext(AppContext);

  const { positionHistory } = fetchedPersonData.person.positions;

  const onChangeHandler = (idx, key, value) => {
    updateExperienceInfo(idx, key, value)
  }

  const onImproveHandler = () => {
    // TODO: add
    // you can now use onChangeHandler
  }


  const onSaveHandler = () => {
    updateStep(Steps.Education);
  }

  return <div className={styles.headingWrapper}>
    <div className={styles.heading}>
      <h1>Tell us about your most recent job</h1>
      <p>We’ll start there and work backward.</p>
    </div>
    <div className={styles.contentWrapper}>

      {positionHistory.map((position, idx) => (
        <form className={styles.form} key={idx}>
          <div className={styles.formEntry}>
            <TextField label='Job Title' name='title' fullWidth value={position.title}
              onChange={(e) => onChangeHandler(idx, e.target.name, e.target.value)}
            />
            <TextField label='Employer' name='companyName' fullWidth value={position.companyName}
              onChange={(e) => onChangeHandler(idx, e.target.name, e.target.value)}
            />
          </div>
          <div className={styles.formEntry}>
            <TextField label='Location' name='companyLocation' value={[position.companyLocation]} fullWidth
              onChange={(e) => onChangeHandler(idx, e.target.name, e.target.value)}
            />
          </div>
          <TextField multiline type='text' label='Description' name='description' value={[position.description]}
            onChange={(e) => onChangeHandler(idx, e.target.name, e.target.value)}
          />
          <Button color='success' style={{ alignSelf: 'flex-end' }} variant='contained' onClick={() => onImproveHandler()}>Improve with AI 🪄🪄🪄</Button>
          <div className={styles.formEntry}>
            <TextField type='number' placeholder='Year' label='Start Date' name='location_country' value={position.startEndDate.start.year} />
            <TextField type='text' placeholder='Month' value={MONTHS[position.startEndDate.start?.month - 1]} />
            <TextField type='email' placeholder='Year' label='End Date' value={position.startEndDate.end?.year} disabled={!position.startEndDate.end} />
            <TextField type='text' placeholder='Month' value={MONTHS[position.startEndDate.end?.month - 1]} disabled={!position.startEndDate.end} />
          </div>
          <p>I currently work here</p>
          <Checkbox checked={!position.startEndDate.end} style={{ alignSelf: 'flex-start' }} />
        </form>
      ))}
    </div>
    <Button variant='contained' color='secondary' style={{ alignSelf: 'flex-end' }} onClick={onSaveHandler}>Save and Next</Button>
  </div>
}

export default Experience;