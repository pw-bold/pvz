import { Box, Button, Modal, TextField } from "@mui/material";

import styles from './StartScreen.module.css';
import { useContext, useState } from "react";
import AppContext, { Steps } from "../../context/AppContext";

const OPTIONS = [
  {
    title: 'Start from scratch',
    description: 'Get step-by-step support with CV structure and expert content',
    buttonLabel: 'Create new',
    choice: 'new',
    image: '/newresume.png'
  },
  {
    title: 'Upload existing resume',
    description: 'Edit your resume for fresh design and grammar-check',
    buttonLabel: 'Choose file',
    choice: 'upload',
    image: '/existing resume.png'
  },
  {
    title: 'Connect with LinkedIn',
    description: 'Save time on data entry to focus on the professional layout.',
    buttonLabel: 'Import data',
    choice: 'linkedin',
    image: '/LinkedIn_icon.svg (1).png'
  },
];

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid gray',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: '1rem',
};

function StartScreen({ }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInput, setUserInput] = useState('');

  const { updateStateWithFetchedData, updateStep } = useContext(AppContext);

  const onClickHandler = (choice) => {
    if (choice === 'linkedin') {
      // show popup
      setIsModalOpen(true);
    }
    if (choice === 'new') {
      updateStep(Steps.Heading);
    }
    if (choice === 'upload') {
      return
    }
  }

  const handleImport = () => {
    if (!userInput) return;
    updateStateWithFetchedData(userInput);
    updateStep(Steps.Heading);
  }

  return <div className={styles.container}>
    <Modal open={isModalOpen}>
      <Box sx={{ ...modalStyle }}>
        <div className={styles.modal}>
          <h2>Paste a link to your linkedIn profile</h2>
          <TextField variant="outlined" onChange={(e) => setUserInput(e.target.value)} fullWidth />
          <div className={styles.modalButtons}>
            <Button variant='contained' onClick={handleImport}>Import my resume</Button>
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          </div>
        </div>
      </Box></Modal>
    <h1>How would you like to build your resume?</h1>
    <div className={styles.boxes}>
      {OPTIONS.map(option => <Box
        key={option.title}
        height={300}
        width={300}
        display="flex"
        alignItems="center"
        p={3}
        sx={{ border: '2px solid grey', borderRadius: '1rem', flexDirection: 'column', justifyContent: 'space-evenly' }}
      >
        <div style={{ width: '5rem'}}>
          <img src={option.image} style={{width: '100%'}}/>
        </div>
        <h3>{option.title}</h3>
        <p>{option.description}</p>
        <Button variant="outlined" onClick={() => onClickHandler(option.choice)}>{option.buttonLabel}</Button>
      </Box>)}

    </div>
  </div>
}

export default StartScreen