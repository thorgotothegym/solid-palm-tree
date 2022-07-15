import api from "../../../../common/infraestructure/api";
import GasStation from "../../../domain/entities/GasStation";
import { restorePetrolStations } from "../../builders/restorePetrolStations";

export async function putPetrolStations({
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
}: GasStation) {
  const response = await api.put(`/petrol/${id}`, {
    gasoline15LPrice,
    gasoline1LPrice,
    gasoline3LPrice,
    gasoline5LPrice,
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
  });
  return response;
}

export default putPetrolStations;
