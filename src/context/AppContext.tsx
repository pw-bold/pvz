
import { createContext, useState } from "react";
import getLinkedinProfile, { GeneralData } from "../utils/getLinkedinProfile";

import { mockedData } from "../mock/mockedData";

export enum Steps {
  Welcome = 'Welcome',
  Templates = 'Templates',
  Start = 'Start', // optional droprdown
  Heading = 'Heading',
  Experience = 'Experience',
  Education = 'Education',
  Skills = 'Skills',
  Summary = 'Summary',
}

interface AppContextType {
  step: Steps;
  fetchedPersonData: GeneralData | null;
  isLoading: boolean;
  startLoading: () => void;
  updateStateWithFetchedData: (url: string) => void;
  updateStep: (step: Steps) => void;
  updatePersonalInfo: (key: string, value: string) => void;
  updateExperienceInfo(idx: number, key: string, value: string)
}

const defaultState: AppContextType = {
  step: Steps.Welcome,
  fetchedPersonData: {
    "success": false,
    "person": {
      "publicIdentifier": "",
      "linkedInIdentifier": "",
      "firstName": "",
      "lastName": "",
      "headline": "",
      "location": "",
      "photoUrl": "",
      "positions": {
        "positionsCount": 0,
        "positionHistory": []
      },
      "creationDate": {
        "month": 0,
        "year": 0
      },
      "followerCount": 0,
      "schools": {
        "educationsCount": 0,
        "educationHistory": []
      },
      "skills": [],
      "languages": [],
      "linkedInUrl": ""
    },
  },
  isLoading: false,
  updateStateWithFetchedData: () => { },
  updateStep: () => { },
  updatePersonalInfo: () => { },
  startLoading: () => { },
  updateExperienceInfo: () => {},
}

const AppContext = createContext(defaultState);


export const AppContextProvider = ({ children }) => {
  const [step, setStep] = useState<Steps>(Steps.Welcome);
  const [userData, setUserData] = useState<GeneralData>(defaultState.fetchedPersonData);
  const [loading, setLoading] = useState(false);


  const updateStateWithFetchedData = async (url) => {
    try {
      // const response = await getLinkedinProfile(url);
      setLoading(true);
      // console.log('response:', response.profile);
      // setUserData(response.profile); // Update context with fetched data
      setUserData(mockedData); // mock data for now to avoid expensive api calls
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      setStep(Steps.Welcome)
    }

  }

  const updateStep = (step: Steps) => {
    setStep(step);
  }

  const updatePersonalInfo = (key: string, value: string) => {
    setUserData((prevState) => ({ ...prevState, person: { ...prevState.person, [key]: value } }))
  }

  const updateExperienceInfo = (idx, key: string, value: string) => {
    setUserData((prevState) => ({
      ...prevState,
      person: {
        ...prevState.person,
        positions: {
          ...prevState.person.positions,
          positionHistory: prevState.person.positions.positionHistory.map((it, i) => idx === i ? ({ ...it, [key]: value }) : it)
        }
      }
    }))
  }

  const startLoading = () => setLoading(true);

  const contextValue: AppContextType = {
    step: step,
    fetchedPersonData: userData,
    isLoading: loading,
    updateStateWithFetchedData,
    updateStep,
    updatePersonalInfo,
    startLoading,
    updateExperienceInfo,
  };


  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
