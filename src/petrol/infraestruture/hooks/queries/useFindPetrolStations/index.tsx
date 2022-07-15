import { useQuery } from "react-query";
import { CommonQueryKeys } from "../queryKeys";
import GasStation from "../../../../domain/entities/GasStation";
import findPetrol from "../../../../domain/useCases/findPetrol";

const useFindPetrolStations = () => {
  const query = useQuery<GasStation[] | undefined, Error>(
    [CommonQueryKeys.PETROLSTATIONS],
    () => {
      return findPetrol();
    },
    {
      refetchInterval: 30000,
    }
  );

  return query;
};

export default useFindPetrolStations;
