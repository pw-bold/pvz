
import { createContext, useReducer, useState } from "react";
import getLinkedinProfile from "../utils/getLinkedinProfile";

import { mockedData } from "../mock/mockedData";

export enum Steps {
  Welcome,
  Templates,
  Start, // optional droprdown
  Heading,
  Experience,
  Education,
  Skills,
  Summary,
  Final
}

interface AppData {
  user: {
    personalInfo: {
      firstName: string;
      lastName: string;
      email: string;
      city: string;
      country: string;
      phone: number;
    }
    experience: {
      jobTitle: string;
      employer: string;
      startDate: Date;
      endDate: Date;
      description: string;
      city?: string;
      isCurrent: boolean;
    }
  }
  //...
}

interface AppContextType {
  step: Steps;
  fetchedPersonData: object | null;
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
      "linkedinUrl": "",
      "linkedinId": ""
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
  const [userData, setUserData] = useState(null);


  const updateStateWithFetchedData = async (url) => {
    try {
      const response = await getLinkedinProfile(url);
      console.log('response:', response.profile);
      setUserData(response.profile); // Update context with fetched data

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  const updateStep = (step: Steps) => {
    setStep(step);
  }

  const contextValue = {
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
