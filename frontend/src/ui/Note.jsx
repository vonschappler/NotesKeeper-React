import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import { useState } from "react";
import EditNote from "../features/notes/EditNote";
import { useDeleteNote } from "../features/notes/useDeleteNote";

const Note = ({ note }) => {
  const { deleteNote } = useDeleteNote();
  const [edtNote, setEdtNote] = useState({});
  const [open, setOpen] = useState(false);

  const handleDelete = (id) => {
    deleteNote(id);
  };

  const handleOpen = (toEdit) => {
    setOpen((curVal) => !curVal);
    setEdtNote((note) => toEdit);

    open && setEdtNote({});
  };

  return (
    <>
      <Card className="w-[350px] rounded-lg bg-slate-400 shadow">
        <CardHeader
          component="h5"
          title={note.title}
          className="text-2xl font-extrabold"
        />
        <Divider variant="middle" className="bg-slate-900" />
        <CardContent className="-mb-3 flex flex-col gap-3">
          <span>{note.content}</span>
          <span className="w-full text-right text-xs opacity-60">
            Created at: {new Date(note.createdAt).toLocaleString()}
          </span>
        </CardContent>
        <CardActions className="mt-2 flex justify-end bg-slate-500 ">
          <Button
            className="transiton-all flex items-center justify-center gap-2 bg-slate-700 px-4 text-slate-300 duration-500 hover:bg-slate-500"
            onClick={() => handleOpen(note)}
          >
            <Edit />
            <span>Edit</span>
          </Button>
          <Button
            className="flex items-center justify-center gap-2 bg-slate-900 px-4 text-slate-300 transition-all duration-500 hover:bg-slate-500 hover:shadow-lg"
            onClick={() => handleDelete(note.id)}
          >
            <Delete />
            <span>Delete</span>
          </Button>
        </CardActions>
      </Card>
      <EditNote note={edtNote} open={open} onOpen={handleOpen} />
    </>
  );
};

export default Note;
