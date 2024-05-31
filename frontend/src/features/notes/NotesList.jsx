import { useGetNotes } from "./useGetNotes";

import { Grid } from "@mui/material";
import Note from "../../ui/Note";

const NotesList = () => {
  const { notes } = useGetNotes();

  if (!notes) return null;

  console.log(notes.map);

  return (
    <Grid
      container
      className="flex items-center justify-around gap-4"
    >
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
