import { createContext, useReducer, useState } from "react";
import { data } from "../mock/mockedData";

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

interface AppContext {
  step: Steps,
  fetchedPersonData: object | null;
  appData: AppData;
}

const defaultState = {
  step: Steps.Welcome,
  fetchedPersonData: data,

}

// function appReducer(state, action) {
//   switch(action) {
//     case 'UPDATE_APP_DATA': {

//     }
//   }
// }

const AppContext = createContext(defaultState);


export const AppContextProvider = ({ children }) => {
  // const [appState, dispatch] = useReducer(appReducer, defaultState);

  return (
    <AppContext.Provider value={defaultState}>
      {children}
    </AppContext.Provider>
  );
}

