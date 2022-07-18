import putPetrolStations from "../../../infraestruture/repositories/putPetrolStations";
import GasStation from "../../entities/GasStation";

export default async function updatePetrol({
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
  return await putPetrolStations({
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
  });
}
