import { observer } from "mobx-react-lite";
import { useRootStore } from "./context";

export const NoteItem = observer(({ noteId }: { noteId: string }) => {
  const rootStore = useRootStore();
  const note = rootStore.findById(noteId);
  return <div>Note Item: {note}</div>;
});
