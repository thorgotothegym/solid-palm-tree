import React from "react";
import { render, screen } from "@testing-library/react";

import { CustomHeader } from "./index";

const Wrapper = () => <CustomHeader title="Welcome to Petrol Station" />;

describe("CustomHeader", () => {
  it("should appear a title", async () => {
    render(<Wrapper />);
    const title = screen.getByText("Welcome to Petrol Station");

    expect(title).toBeInTheDocument();
  });
});
