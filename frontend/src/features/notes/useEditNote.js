import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateData } from "../../services/api";

const useUpdateNote = () => {
  const queryClient = useQueryClient();

  const { mutate: updateNote } = useMutation({
    mutationFn: (id, data) => updateData({ id, data }),
    onSuccess: () => queryClient.invalidateQueries(["notes"]),
  });

  return { updateNote };
};

export { useUpdateNote };
