import { createContext, useReducer, useState } from "react";
import { mockedData } from "../mock/mockedData";

export enum Steps {
  Welcome,
  Templates,
  Start, // optional droprdown
  PersonalInfo,
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
  fetchedPersonData: null,
  updateStateWithFetchedData: () => {},
  updateStep: () => {}
}

const AppContext = createContext(defaultState);


export const AppContextProvider = ({ children }) => {
  const [step, setStep] = useState<Steps>(Steps.Welcome);
  const [userData, setUserData] = useState(null);

  const updateStateWithFetchedData = async(url) => {
    // try {
    //   const response = await fetch('your-api-url');
    //   const data = await response.json();
    //   setData(data); // Update context with fetched data
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
    setUserData(mockedData);
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
