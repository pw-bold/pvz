import { createContext, useReducer, useState } from "react";
import useLinkedin from "../hooks/useLinkedin";
import { mockedData } from "../mock/mockedData";

enum Steps {
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
  appData: AppData;
  updateStateWithFetchedData: () => object;
}



const defaultState = {
  step: Steps.Welcome,
  fetchedPersonData: null,
  updateStateWithFetchedData: (url) => {},
}

const AppContext = createContext(defaultState);


export const AppContextProvider = ({ children }) => {
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

  const contextValue = {
    step: Steps.Welcome,
    fetchedPersonData: userData,
    updateStateWithFetchedData,
  };

  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
