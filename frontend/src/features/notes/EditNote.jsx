import { Save, Undo } from "@mui/icons-material";
import { Dialog, DialogActions, Divider, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import InputField from "../../ui/InputField";
import { useUpdateNote } from "./useEditNote";

const EditNote = ({ open, onOpen, note }) => {
  const { updateNote } = useUpdateNote();
  const { control, reset, handleSubmit, formState, register } = useForm({
    defaultValues: {
      title: note?.title,
      content: note?.content,
    },
  });
  const { errors } = formState;

  const submitForm = async (data) => {
    const id = note.id;
    updateNote({ id, data });
    handleClose();
  };

  const handleClose = () => {
    onOpen();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Form
        onSubmit={handleSubmit(submitForm)}
        controller={control}
        className="mx-auto  w-[350px] transition-all md:w-[500px]"
        noValidate
      >
        <InputField
          defaultValue={note?.title}
          fullWidth
          variant="standard"
          name="title"
          id="title"
          register={{
            ...register("title", {
              required: "Please provide the note title",
            }),
          }}
          error={errors.title}
          controller={control}
          placeholder="Title"
          InputProps={{
            className:
              "w-full px-4 py-2 bg-slate-400 focus-within:shadow-inset transition-all duration-500",
          }}
          helperText={errors?.title?.message}
          FormHelperTextProps={{
            className: "bg-red-500 px-2 pt-2 !text-white -mt-1",
          }}
        />
        <Divider variant="full" className="bg-slate-900" />
        <InputField
          defaultValue={note?.content}
          variant="standard"
          fullWidth
          multiline
          rows={3}
          name="content"
          id="content"
          error={errors.content}
          register={{
            ...register("content", {
              required: "Please provide the note content",
            }),
          }}
          placeholder="Content"
          InputProps={{
            className:
              "w-full px-4 py-2 bg-slate-400 focus-within:shadow-inset transition-all duration-500",
          }}
          helperText={errors?.content?.message}
          FormHelperTextProps={{
            className: "bg-red-500 px-2 pt-2 !text-white -mt-1",
          }}
        />
        <DialogActions className="flex justify-end border-t-[1px] border-t-slate-900 bg-slate-500 py-2">
          <IconButton
            className="bg-slate-700 text-slate-400 transition-all duration-500 hover:scale-105 hover:bg-slate-900 hover:shadow"
            hidden={!formState.isDirty}
            onClick={() => reset()}
          >
            <Undo />
          </IconButton>
          <IconButton
            type="submit"
            className="bg-slate-700 text-slate-400 transition-all duration-500 hover:scale-105 hover:bg-slate-900 hover:shadow"
            disabled={errors.content || errors.title}
          >
            <Save />
          </IconButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default EditNote;
