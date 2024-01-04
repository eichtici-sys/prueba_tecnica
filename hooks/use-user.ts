import { createUser, getAllUsers } from "@/helpers/api/user"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useCreateUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (error) => {
      console.log(error)
    },
  })
}

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  })
}
