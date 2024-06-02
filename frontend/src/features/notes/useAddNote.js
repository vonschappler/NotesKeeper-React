import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addData } from "../../services/api";

const useAddNote = () => {
  const queryClient = useQueryClient();

  const { mutate: addNote } = useMutation({
    mutationFn: (data) => addData(data),
    onSuccess: () => queryClient.invalidateQueries(["notes"]),
  });

  return { addNote };
};

export { useAddNote };

