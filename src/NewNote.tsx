import { NoteData, Tag } from "./App";
import NoteFrom from "./NoteFrom";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

const NewNote = ({onSubmit, onAddTag, availableTags} : NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NoteFrom onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  );
};

export default NewNote;
