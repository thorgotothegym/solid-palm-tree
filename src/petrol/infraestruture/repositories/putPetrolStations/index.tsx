import api from "../../../../common/infraestructure/api";
import GasStation from "../../../domain/entities/GasStation";
import { adaptPutPetrolStations } from "../../adapters/adaptPutPetrolStations";

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
  await api.put(
    `/petrol/${id}`,
    adaptPutPetrolStations({
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
    })
  );
}

export default putPetrolStations;
