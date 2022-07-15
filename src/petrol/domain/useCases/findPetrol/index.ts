import getPetrolStations from "../../../infraestruture/repositories/getPetrolStations";

export default async function findPetrol() {
  return await getPetrolStations();
}
