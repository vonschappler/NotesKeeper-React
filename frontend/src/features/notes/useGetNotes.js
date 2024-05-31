import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getData as getNotes } from "../../services/api";

const useGetNotes = () => {
  const [query] = useSearchParams();
  console.log(query);
  const {
    isLoading,
    data: { data: notes } = {},
    error,
  } = useQuery({
    queryKey: ["notes", ...query],
    queryFn: async () => getNotes({ query }),
    retry: false,
    throwOnError: true,
  });
  return { isLoading, notes, error };
};

export { useGetNotes };
