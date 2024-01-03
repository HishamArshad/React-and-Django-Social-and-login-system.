import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [booleanValue, setBooleanValue] = useState(false);

  const toggleBooleanValue = () => {
    setBooleanValue((prevValue) => !prevValue);
  };

  return (
    <MyContext.Provider value={{ booleanValue, toggleBooleanValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
