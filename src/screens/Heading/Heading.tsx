import { Button, TextField } from '@mui/material';
import styles from './Heading.module.css';
import { useContext } from 'react';
import AppContext, { Steps } from '../../context/AppContext';

function Heading({ }) {
  const { fetchedPersonData, updateStep, updatePersonalInfo } = useContext(AppContext);
  const { person } = fetchedPersonData;

  console.log(fetchedPersonData);

  const [city, , country] = person.location.split(',');

  const onSaveHandler = () => {
    updateStep(Steps.Experience);
  }

  const onChangeHandler = (key, value) => {
    updatePersonalInfo(key, value);
  }

  return <div className={styles.headingWrapper}>
    <div className={styles.heading}>
      <h1>What’s the best way for employers to contact you?</h1>
      <p>We suggest including an email and phone number.</p>
    </div>
    <div className={styles.contentWrapper}>
      <div>
        <div className={styles.imageWrapper}>
          <img src={person.photoUrl || '/placeholder_image.jpeg'} />
        </div>
        <Button size='small' variant='outlined'>Upload a new photo</Button>
      </div>
      <form className={styles.form}>
        <div className={styles.formEntry}>
          <TextField label='First Name' name='firstName' fullWidth value={person.firstName} onChange={(e) => onChangeHandler(e.target.name, e.target.value)} />
          <TextField label='Last Name' name='lastName' fullWidth value={person.lastName} onChange={(e) => onChangeHandler(e.target.name, e.target.value)} />
        </div>
        <div className={styles.formEntry}>
          <TextField label='City' name='location_city' fullWidth value={city} />
          <TextField label='Country' name='location_country' fullWidth value={country} />
        </div>
        <div className={styles.formEntry}>
          <TextField type='number' label='Phone Number' name='phone' fullWidth onChange={(e) => onChangeHandler(e.target.name, e.target.value)} />
          <TextField type='email' label='Email' name='linkedInUrl' value={person.linkedInUrl} required fullWidth onChange={(e) => onChangeHandler(e.target.name, e.target.value)} />
        </div>
      </form>
    </div>
    <Button variant='contained' color='secondary' style={{ alignSelf: 'flex-end' }} onClick={onSaveHandler}>Save and Next</Button>
  </div>
}

export default Heading;