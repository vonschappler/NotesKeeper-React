import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";

const Note = ({ note }) => {
  return (
    <Card className="w-[350px] rounded-lg bg-slate-400 shadow">
      <CardHeader
        component="h5"
        title={note.title}
        className="text-2xl font-extrabold"
      />
      <Divider variant="middle" className="bg-slate-900" />
      <CardContent className="flex flex-col gap-3">
        <p>{note.content}</p>
      </CardContent>
      <CardActions className="flex justify-end">
        <Button className="transiton-all flex items-center justify-center gap-2 bg-slate-700 px-4 text-slate-300 duration-500 hover:bg-slate-500">
          <Edit />
          <span>Edit</span>
        </Button>
        <Button className="flex items-center justify-center gap-2 bg-slate-900 px-4 text-slate-300 transition-all duration-500 hover:bg-slate-500 hover:shadow-lg">
          <Delete />
          <span>Delete</span>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Note;
