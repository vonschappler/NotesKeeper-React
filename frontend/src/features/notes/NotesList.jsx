import { Grid } from "@mui/material";
import Note from "../../ui/Note";
import { useGetNotes } from "./useGetNotes";

const NotesList = () => {
  const { notes } = useGetNotes();
  if (!notes) return null;
  return (
    <Grid container className="flex items-center justify-around gap-4">
      {!notes.data && (
        <h1 className="text-3xl text-slate-200">
          There are no notes to dispaly
        </h1>
      )}
      {notes.data &&
        notes.data.map((note, i) => (
          <Grid item key={i}>
            <Note note={note} />
          </Grid>
        ))}
    </Grid>
  );
};

export default NotesList;
