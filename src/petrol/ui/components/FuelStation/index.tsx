import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import GasStation from "../../../domain/entities/GasStation";

import usePetrolStations from "../../../infraestruture/hooks/mutations/usePetrolStations";

export const FuelStation = ({
  gasoline15LPrice,
  gasoline1LPrice,
  gasoline3LPrice,
  gasoline5LPrice,
  nameGasStation,
  total15Liter,
  total1Liter,
  total3Liter,
  total5Liter,
  totalLiter,
  totalPrice,
  id,
  pricePer15Liter,
  pricePer1Liter,
  pricePer3Liter,
  pricePer5Liter,
}: GasStation): JSX.Element => {
  const [form, setForm] = useState<GasStation>({
    gasoline15LPrice: gasoline15LPrice,
    gasoline1LPrice: gasoline1LPrice,
    gasoline3LPrice: gasoline3LPrice,
    gasoline5LPrice: gasoline5LPrice,
    nameGasStation: nameGasStation,
    total15Liter: total15Liter,
    total1Liter: total1Liter,
    total3Liter: total3Liter,
    total5Liter: total5Liter,
    totalLiter: totalLiter,
    totalPrice: totalPrice,
    id: id,
    pricePer15Liter: pricePer15Liter,
    pricePer1Liter: pricePer1Liter,
    pricePer3Liter: pricePer3Liter,
    pricePer5Liter: pricePer5Liter,
  });
  const updatePetrolStation = usePetrolStations();
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updatePetrolStation.mutate({
      gasoline15LPrice: form.gasoline15LPrice,
      gasoline1LPrice: form.gasoline1LPrice,
      gasoline3LPrice: form.gasoline3LPrice,
      gasoline5LPrice: form.gasoline5LPrice,
      nameGasStation: form.nameGasStation,
      total15Liter: form.total15Liter,
      total1Liter: form.total1Liter,
      total3Liter: form.total3Liter,
      total5Liter: form.total5Liter,
      totalLiter: form.totalLiter,
      totalPrice:
        form.gasoline1LPrice * form.pricePer1Liter +
        form.gasoline3LPrice * form.pricePer3Liter +
        form.gasoline5LPrice * form.pricePer5Liter +
        form.gasoline15LPrice * form.pricePer15Liter,
      id: form.id,
      pricePer15Liter: form.pricePer15Liter,
      pricePer1Liter: form.pricePer1Liter,
      pricePer3Liter: form.pricePer3Liter,
      pricePer5Liter: form.pricePer5Liter,
    });
    console.log("form", form);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 1,
        fontWeight: "bold",
        marginBottom: "20px",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography>{nameGasStation}</Typography>
      </Box>
      <form style={{ width: "100%" }} onSubmit={handleSubmitForm}>
        <button style={{ float: "right" }} type="submit">
          update!
        </button>
        <Box>
          <h1>1 Litre</h1>
          <input
            id="gasoline1LPrice"
            name="gasoline1LPrice"
            type="number"
            placeholder={String(gasoline1LPrice)}
            onChange={(event) => {
              setForm({
                ...form,
                gasoline1LPrice: Number(event.target.value),
              });
            }}
          />
          x
          <input
            type="number"
            readOnly
            placeholder={String(pricePer1Liter)}
          />{" "}
          <p>
            total price per 1L: {form.gasoline1LPrice * form.pricePer1Liter}
          </p>
          <p>total litres per 1L: {form.gasoline1LPrice}</p>
        </Box>
        <br />
        <Box>
          <h1>3 Litre</h1>
          <input
            id="gasoline3LPrice"
            type="number"
            placeholder={String(gasoline3LPrice)}
            onChange={(event) =>
              setForm({
                ...form,
                gasoline3LPrice: Number(event.target.value),
              })
            }
          />{" "}
          x{" "}
          <input type="number" readOnly placeholder={String(pricePer3Liter)} />{" "}
          <p>
            total price per 3L: {form.gasoline3LPrice * form.pricePer3Liter}
          </p>
          <p>total litres per 3L: {form.gasoline3LPrice}</p>
        </Box>
        <Box>
          <h1>5 Litre</h1>
          <input
            id="gasoline5LPrice"
            type="number"
            placeholder={String(gasoline5LPrice)}
            onChange={(event) =>
              setForm({
                ...form,
                gasoline5LPrice: Number(event.target.value),
              })
            }
          />{" "}
          x{" "}
          <input type="number" readOnly placeholder={String(pricePer5Liter)} />{" "}
          <p>
            total price per 5L: {form.gasoline5LPrice * form.pricePer5Liter}
          </p>
          <p>total litres per 5L: {form.gasoline5LPrice}</p>
        </Box>
        <Box>
          <h1>15 Litre</h1>
          <input
            id="gasoline15LPrice"
            type="number"
            placeholder={String(gasoline15LPrice)}
            onChange={(event) =>
              setForm({
                ...form,
                gasoline15LPrice: Number(event.target.value),
              })
            }
          />{" "}
          x{" "}
          <input type="number" readOnly placeholder={String(pricePer15Liter)} />{" "}
          <p>
            total price per 15L: {form.gasoline15LPrice * form.pricePer15Liter}
          </p>
          <p>total litres per 15L: {form.gasoline15LPrice}</p>
          <h1>
            TOTAL PRICE IS{" "}
            {form.gasoline1LPrice * form.pricePer1Liter +
              form.gasoline3LPrice * form.pricePer3Liter +
              form.gasoline5LPrice * form.pricePer5Liter +
              form.gasoline15LPrice * form.pricePer15Liter}{" "}
            €
          </h1>
          <h1>
            LITERS:{" "}
            {form.gasoline1LPrice +
              form.gasoline3LPrice +
              form.gasoline5LPrice +
              form.gasoline15LPrice}{" "}
            L
          </h1>
        </Box>
      </form>
    </Box>
  );
};
