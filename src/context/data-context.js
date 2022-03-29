import { createContext, useContext, useReducer, useState } from "react";

const DataContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, noteData: action.payload };
    default:
      return state;
  }
};

const archiveReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_ARCHIVE":
      return { ...state, archiveData: action.payload };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const date = new Date();
  const initialVal = {
    _id: "",
    title: "",
    body: "",
    backGround: "#e7dcdc",
    CreatedAt: `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`,
  };
  const [noteState, noteDispatch] = useReducer(noteReducer, { noteData: [] });
  const [archiveState, archiveDispatch] = useReducer(archiveReducer, {
    archiveData: [],
  });
  const [note, setNote] = useState(initialVal);
  return (
    <DataContext.Provider
      value={{
        noteState,
        noteDispatch,
        archiveState,
        archiveDispatch,
        note,
        setNote,
        initialVal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
