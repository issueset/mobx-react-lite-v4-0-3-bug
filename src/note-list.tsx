import { observer } from "mobx-react-lite";

import { NoteItem } from "./note-item";

const noteIds = ["a", "b", "c"];

export const NoteList = observer(() => {
  return (
    <div>
      {noteIds.map((noteId, index) => (
        <NoteItem key={index} noteId={noteId} />
      ))}
    </div>
  );
});
