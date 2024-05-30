import { Grid } from "@mui/material";
import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <Grid container className="flex items-center justify-around gap-4">
      {notes.map((note, i) => (
        <Grid item key={i}>
          <Note note={note} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NotesList;
