import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateData } from "../../services/api";

const useUpdateNote = () => {
  const queryClient = useQueryClient();

  const { mutate: updateNote, isLoading } = useMutation({
    mutationFn: ({ id, data }) => updateData({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
      // queryClient.setQueryData(["notes"], data);
    },
  });

  return { updateNote, isLoading };
};

export { useUpdateNote };
