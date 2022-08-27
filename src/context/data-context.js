import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAuth } from "./auth-context";
import { useTheme } from "./theme-context";
import {
  getAllNotes,
  getArchiveNotes,
  getTrashNotes,
} from "../services/Services";

const DataContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, noteData: action.payload };
    case "PINNED":
      return {
        ...state,
        noteData: state.noteData.map((item) => {
          return action.payload === item._id
            ? { ...item, isPinned: !item.isPinned }
            : item;
        }),
      };
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
    case "FILTER":
      const newFilter = {
        ...state.filter,
        [action.payload[0]]: action.payload[1],
      };
      return { ...state, filter: newFilter };
    case "CLEAR":
      const removeSort = {
        ...state.filter,
        sort: "",
      };
      return { ...state, filter: removeSort };
    default:
      return state;
  }
};

const trashReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_TRASH":
      return { ...state, trashData: action.payload };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const { theme } = useTheme();
  const { token } = useAuth();
  const date = new Date();
  const initialVal = {
    _id: "",
    title: "",
    body: "",
    backGround: "",
    isPinned: false,
    CreatedAt: `${String(date.getDate()).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`,
    tag: "",
    actualTime: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    timestamp: date.getTime(),
  };
  const initialFilter = {
    search: "",
    sort: "",
  };
  const [noteState, noteDispatch] = useReducer(noteReducer, { noteData: [] });
  const [archiveState, archiveDispatch] = useReducer(archiveReducer, {
    archiveData: [],
  });
  const [trashState, trashDispatch] = useReducer(trashReducer, {
    trashData: [],
  });
  const [note, setNote] = useState(initialVal);
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    filter: initialFilter,
  });
  const [sideBar, setSideBar] = useState(false);
  const [loader, setLoader] = useState(false);

  const sideBarHandler = () => {
    setSideBar((curr) => !curr);
  };

  useEffect(() => {
    (async () => {
      if (token) {
        const allNotes = await getAllNotes(token);
        const allTrashNotes = await getTrashNotes(token);
        const allArchiveNotes = await getArchiveNotes(token);

        noteDispatch({ type: "ADD_NOTE", payload: allNotes.data.notes });
        trashDispatch({
          type: "ADD_TO_TRASH",
          payload: allTrashNotes.data.trash,
        });
        archiveDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: allArchiveNotes.data.archives,
        });
      } else {
        noteDispatch({ type: "ADD_NOTE", payload: [] });
        trashDispatch({ type: "ADD_TO_TRASH", payload: [] });
        archiveDispatch({ type: "ADD_TO_ARCHIVE", payload: [] });
      }
    })();
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        noteState,
        noteDispatch,
        archiveState,
        archiveDispatch,
        trashState,
        trashDispatch,
        filterState,
        filterDispatch,
        note,
        setNote,
        initialVal,
        sideBar,
        setSideBar,
        sideBarHandler,
        loader,
        setLoader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
