import NoteFrom from "./NoteFrom";

type NewNoteProps = {
  onSubmit: {data: NoteData} => void
}

const NewNote = ({onSubmit} : NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NoteFrom onSubmit={onSubmit} />
    </>
  );
};

export default NewNote;
