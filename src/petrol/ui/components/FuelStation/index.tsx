import React from "react";
import { Box, Typography } from "@mui/material";
import GasStation from "../../../domain/entities/GasStation";

export const FuelStation = ({
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
}: GasStation): JSX.Element => {
  return (
    <>
      <Box
        key={id}
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
        <div>
          <Typography align="center">{nameGasStation}</Typography>
        </div>
        <form>
          <Box>
            <h1>1 Litre</h1>
            <input
              id="name"
              type="number"
              placeholder={String(gasoline1LPrice)}
            />{" "}
            x{" "}
            <input
              type="number"
              readOnly
              placeholder={String(pricePer1Liter)}
            />{" "}
            =<span>total litres: {total1Liter}</span>
          </Box>
          <br />
          <Box>
            <h1>3 Litre</h1>
            <input
              id="name"
              type="number"
              placeholder={String(gasoline3LPrice)}
            />{" "}
            x{" "}
            <input
              type="number"
              readOnly
              placeholder={String(pricePer3Liter)}
            />{" "}
            =<span>total litres: {total3Liter}</span>
          </Box>
          <Box>
            <h1>5 Litre</h1>
            <input
              id="name"
              type="number"
              placeholder={String(gasoline5LPrice)}
            />{" "}
            x{" "}
            <input
              type="number"
              readOnly
              placeholder={String(pricePer5Liter)}
            />{" "}
            =<span>total litres: {total5Liter}</span>
          </Box>
          <Box>
            <h1>15 Litre</h1>
            <input
              id="name"
              type="number"
              placeholder={String(gasoline15LPrice)}
            />{" "}
            x{" "}
            <input
              type="number"
              readOnly
              placeholder={String(pricePer15Liter)}
            />{" "}
            =<span>total litres: {total15Liter}</span>
          </Box>
        </form>
      </Box>
    </>
  );
};
