import { Button, TextField } from '@mui/material';
import styles from './Heading.module.css';
import { useContext } from 'react';
import AppContext, { Steps } from '../../context/AppContext';

function Heading({ }) {
  const { fetchedPersonData, updateStep } = useContext(AppContext);
  const { person } = fetchedPersonData;

  console.log(person);

  const [city, , country] = person.location.split(',');

  const onSaveHandler = () => {
    updateStep(Steps.Experience);
  }


  return <div className={styles.headingWrapper}>
    <div className={styles.heading}>
      <h1>What’s the best way for employers to contact you?</h1>
      <p>We suggest including an email and phone number.</p>
    </div>
    <div className={styles.contentWrapper}>
      <div className={styles.imageWrapper}>
        <img src={person.photoUrl || 'public/placeholder_image.jpeg'} />
      </div>
      <form className={styles.form}>
        <div className={styles.formEntry}>
          <TextField label='First Name' name='firstName' fullWidth value={person.firstName} />
          <TextField label='Last Name' name='lastName' fullWidth value={person.lastName} />
        </div>
        <div className={styles.formEntry}>
          <TextField label='City' name='location_city' fullWidth value={city} />
          <TextField label='Country' name='location_country' fullWidth value={country} />
        </div>
        <div className={styles.formEntry}>
          <TextField type='number' label='Phone Number' name='location_country' fullWidth />
          <TextField type='email' label='Email' value={person.linkedInUrl} required fullWidth />
        </div>
      </form>
    </div>
    <Button variant='contained' color='secondary' style={{ alignSelf: 'flex-end' }} onClick={onSaveHandler}>Save and Next</Button>
  </div>
}

export default Heading;