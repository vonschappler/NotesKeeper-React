import { useForm } from "react-hook-form";

import { sendForm } from "../services/database";

import Form from "../ui/Form";
import InputField from "../ui/InputField";
import TextField from "../ui/TextField";
import KeeperList from "../ui/KeeperList";

const Home = () => {
  const { formState, reset, handleSubmit, control, register, watch } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const { errors } = formState;

  const submitForm = async (data) => {
    await sendForm(data);
  };

  return (
    <>
      <div className="form">
        <Form
          onSubmit={handleSubmit(submitForm)}
          controller={control}
          className=""
          noValidate
        >
          <InputField
            name="title"
            id="title"
            register={{
              ...register("title", { required: "Please fill the title" }),
            }}
            errors={errors.title}
            controller={control}
            placeholder="Title"
            className="w-full bg-slate-100"
          />
          <TextField
            name="content"
            id="content"
            errors={errors.content}
            register={{
              ...register("content", {
                required: "Please provide the content",
              }),
            }}
            placeholder="Content"
            className="w-full bg-slate-100"
          />
          <button>Submit</button>
        </Form>
      </div>
      <KeeperList />
    </>
  );
};

export default Home;
