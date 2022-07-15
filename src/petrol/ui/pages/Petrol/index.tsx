import React from "react";
import useFindPetrolStations from "../../../infraestruture/hooks/queries/useFindPetrolStations";
import { FuelStation } from "../../components/FuelStation";

export const Petrol = (): JSX.Element => {
  const { isLoading, data } = useFindPetrolStations();
  return (
    <>
      {isLoading ? "loading" : null}
      {data?.map((item) => {
        return (
          <FuelStation
            id={item.id}
            nameGasStation={item.nameGasStation}
            pricePer1Liter={item.pricePer1Liter}
            pricePer3Liter={item.pricePer3Liter}
            pricePer5Liter={item.pricePer5Liter}
            pricePer15Liter={item.pricePer15Liter}
            gasoline1LPrice={item.gasoline1LPrice}
            gasoline3LPrice={item.gasoline3LPrice}
            gasoline5LPrice={item.gasoline5LPrice}
            gasoline15LPrice={item.gasoline15LPrice}
            total1Liter={item.total1Liter}
            total3Liter={item.total3Liter}
            total5Liter={item.total5Liter}
            total15Liter={item.total15Liter}
            totalLiter={item.totalLiter}
            totalPrice={item.totalPrice}
          />
        );
      })}
    </>
  );
};
