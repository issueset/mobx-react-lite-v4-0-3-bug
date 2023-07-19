import { useState } from "react";
import { RootStoreProvider } from "./context";
import { NoteList } from "./note-list";
import { RootStore } from "./root-store";

const App = () => {
  const [rootStore] = useState(() => {
    return new RootStore({});
  });
  return (
    <RootStoreProvider value={rootStore}>
      <NoteList />
    </RootStoreProvider>
  );
};

export default App;
