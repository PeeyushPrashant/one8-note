import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, noteData: action.payload };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReducer, { noteData: [] });
  return (
    <DataContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
