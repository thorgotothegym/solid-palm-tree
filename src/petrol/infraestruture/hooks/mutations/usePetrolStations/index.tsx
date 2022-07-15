import { useMutation, useQueryClient } from "react-query";
import GasStation from "../../../../domain/entities/GasStation";

import putPetrolStations from "../../../../infraestruture/repositories/putPetrolStations";

export default function useEnableEmployees() {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({
      gasoline15LPrice,
      gasoline1LPrice,
      gasoline3LPrice,
      gasoline5LPrice,
      id,
      nameGasStation,
      pricePer15Liter,
      pricePer1Liter,
      pricePer3Liter,
      pricePer5Liter,
      total15Liter,
      total1Liter,
      total3Liter,
      total5Liter,
      totalLiter,
      totalPrice,
    }: GasStation) =>
      putPetrolStations({
        gasoline15LPrice,
        gasoline1LPrice,
        gasoline3LPrice,
        gasoline5LPrice,
        id,
        nameGasStation,
        pricePer15Liter,
        pricePer1Liter,
        pricePer3Liter,
        pricePer5Liter,
        total15Liter,
        total1Liter,
        total3Liter,
        total5Liter,
        totalLiter,
        totalPrice,
      }),
    {
      onSuccess: () => {
        alert("update successfull");
        queryClient.invalidateQueries(["updatePetrolStation"]);
      },
      onError: () => {
        alert("something happened, try again later");
      },
    }
  );
  return mutation;
}
