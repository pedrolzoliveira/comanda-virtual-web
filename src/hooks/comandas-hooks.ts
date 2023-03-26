import { useMutation, useQuery } from "react-query"
import { comandasService } from "../services/comandas"

export const useComanda = (id: string, transaction = false) => {
	return useQuery(`comanda-${id}`, () => comandasService.get(id, transaction))
}

export const useCreateComanda = () => {
	return useMutation({
		mutationFn: comandasService.create
	})
}