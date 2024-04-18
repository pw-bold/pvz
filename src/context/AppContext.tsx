
import { createContext, useState } from "react";
import getLinkedinProfile, { GeneralData } from "../utils/getLinkedinProfile";

import { UserData, mockedData } from "../mock/mockedData";

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
  // appData: AppData;
  updateStateWithFetchedData: (url: string) => void;
  updateStep: (step: Steps) => void
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
    "company": {
      "websiteUrl": "",
      "name": "",
      "logo": "",
      "employeeCount": 0,
      "description": "",
      "tagline": "",
      "specialities": [],
      "headquarter": {
        "country": "",
        "geographicArea": null,
        "city": "",
        "postalCode": null
      },
      "foundedOn": {
        "year": 0
      },
      "industry": "",
      "universalName": "",
      "linkedInUrl": "",
      "linkedInId": "",
    },
    "credits_left": 0,
    "rate_limit_left": 0
  },
  updateStateWithFetchedData: () => {},
  updateStep: () => {}
}

const AppContext = createContext(defaultState);


export const AppContextProvider = ({ children }) => {
  const [step, setStep] = useState<Steps>(Steps.Welcome);
  const [userData, setUserData] = useState<GeneralData>(defaultState.fetchedPersonData);


  const updateStateWithFetchedData = async (url) => {
    try {
      const response = await getLinkedinProfile(url);
      console.log('response:', response.profile);
      setUserData(response.profile);; // Update context with fetched data

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  const updateStep = (step: Steps) => {
    setStep(step);
  }

  const contextValue: AppContextType = {
    step: step,
    fetchedPersonData: userData,
    updateStateWithFetchedData,
    updateStep,
  };

  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
