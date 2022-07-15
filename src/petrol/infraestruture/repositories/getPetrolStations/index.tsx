import api from "../../../../common/infraestructure/api";
import GasStation from "../../../domain/entities/GasStation";
import { restorePetrolStations } from "../../builders/restorePetrolStations";

const getPetrolStations = async (): Promise<GasStation[]> => {
  const { data } = await api.get(`/petrol`);

  return data.map(restorePetrolStations);
};

export default getPetrolStations;
