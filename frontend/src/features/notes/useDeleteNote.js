import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteData } from "../../services/api";

const useDeleteNote = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteNote } = useMutation({
    mutationFn: (id) => deleteData({ id }),
    onSuccess: () => queryClient.invalidateQueries(["notes"]),
  });

  return { deleteNote };
};

export { useDeleteNote };
