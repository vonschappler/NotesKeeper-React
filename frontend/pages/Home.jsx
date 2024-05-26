import { useForm } from "react-hook-form";

import { sendForm } from "../services/database";

import Form from "../ui/Form";

const Home = () => {
  const { formState, reset, handleSubmit, control, register, watch } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const { errors } = formState;

  const submitForm = async (data) => {
    // const { title, content } = data;
    // console.log(data);
    // alert(title.concat(content));
    await sendForm(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(submitForm)}
      controller={control}
      className=""
      noValidate
    >
      <input
        name="title"
        id="title"
        {...register("title")}
        placeholder="Title"
      />
      <textarea
        name="content"
        id="content"
        {...register("content")}
        placeholder="Content"
      />
      <button>Submit</button>
    </Form>
  );
};

export default Home;
