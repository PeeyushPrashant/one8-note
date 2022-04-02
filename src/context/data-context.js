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

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_FILTER":
      const newFilter = {
        ...state.filter,
        [action.payload[0]]: action.payload[1],
      };
      return { ...state, filter: newFilter };
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
    backGround: "#192129",
    CreatedAt: `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`,
    tag: "",
  };
  const initialFilter = {
    search: "",
  };
  const [noteState, noteDispatch] = useReducer(noteReducer, { noteData: [] });
  const [archiveState, archiveDispatch] = useReducer(archiveReducer, {
    archiveData: [],
  });
  const [note, setNote] = useState(initialVal);
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    filter: initialFilter,
  });
  const [sideBar, setSideBar] = useState(false);

  const sideBarHandler = () => {
    setSideBar((curr) => !curr);
  };
  return (
    <DataContext.Provider
      value={{
        noteState,
        noteDispatch,
        archiveState,
        archiveDispatch,
        filterState,
        filterDispatch,
        note,
        setNote,
        initialVal,
        sideBar,
        setSideBar,
        sideBarHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
