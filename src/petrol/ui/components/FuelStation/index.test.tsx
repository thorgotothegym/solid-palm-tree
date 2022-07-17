import React from "react";
import { render, screen } from "@testing-library/react";

import { FuelStation } from "./index";
import { QueryProvider } from "../../providers";

const Wrapper = () => (
  <QueryProvider>
    <FuelStation
      gasoline15LPrice={222}
      gasoline1LPrice={0}
      gasoline3LPrice={444}
      gasoline5LPrice={3333}
      nameGasStation={"MAKINGWAY"}
      total15Liter={0}
      total1Liter={0}
      total3Liter={0}
      total5Liter={0}
      totalLiter={20}
      totalPrice={975203.5}
      id="62d180e561912f542c12cc40"
      pricePer15Liter={41.5}
      pricePer1Liter={3.7}
      pricePer3Liter={10.5}
      pricePer5Liter={14.5}
      data-testid="fuelStation"
    />
  </QueryProvider>
);

describe("FuelStation", () => {
  it("should appear name of petrolStation", async () => {
    render(<Wrapper />);
    const title = screen.getByText("MAKINGWAY");

    expect(title).toBeInTheDocument();
  });
  it("should appear the component", async () => {
    render(<Wrapper />);
    const element = await screen.findByTestId("fuelStation");

    expect(element).toBeInTheDocument();
  });
});
