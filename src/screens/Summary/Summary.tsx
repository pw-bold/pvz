import { useContext } from "react";
import AppContext from "../../context/AppContext";

import styles from './Summary.module.css';

function Summary() {
  const { fetchedPersonData } = useContext(AppContext);

  const { person } = fetchedPersonData;
  const { positionHistory } = person.positions;
  const { educationHistory } = person.schools;
  const { skills, languages } = person;

  return (
    <div className={styles.cv}>
      <div className={styles.header}>
        <div className={styles.personalInfo}>
          <img src={person.photoUrl} alt={`${person.firstName} ${person.lastName}`} className={styles.photo} />
          <div>
            <h1>{`${person.firstName} ${person.lastName}`}</h1>
            <p>{person.headline}</p>
            <p>{person.location}</p>
          </div>
        </div>
        <div className={styles.contact}>
          <a href={person.linkedInUrl}>LinkedIn</a>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Work Experience</h2>
        {positionHistory.map((position, index) => (
          <div key={index} className={styles.position}>
            <div className={styles.companyLogo}>
              <img src={position.companyLogo} alt={position.companyName} />
            </div>
            <div className={styles.positionDetails}>
              <h3>{position.title}</h3>
              <p>{position.companyName}</p>
              <p>{position.startEndDate.start.month}/{position.startEndDate.start.year} - {position.startEndDate.end ? `${position.startEndDate.end.month}/${position.startEndDate.end.year}` : 'Present'}</p>
              <p>{position.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.section}>
        <h2>Education</h2>
        {educationHistory.map((education, index) => (
          <div key={index} className={styles.education}>
            <div className={styles.schoolLogo}>
              <img src={education.schoolLogo} alt={education.schoolName} />
            </div>
            <div className={styles.educationDetails}>
              <h3>{education.schoolName}</h3>
              <p>{education.degreeName}</p>
              <p>{education.fieldOfStudy}</p>
              <p>{education.startEndDate.start.year} - {education.startEndDate.end ? education.startEndDate.end.year : 'Present'}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.section}>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Languages</h2>
        <ul>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Summary;