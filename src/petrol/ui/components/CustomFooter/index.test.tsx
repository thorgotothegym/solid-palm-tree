import React from "react";
import { render, screen } from "@testing-library/react";

import { CustomFooter } from "./index";

const Wrapper = () => <CustomFooter />;

describe("CustomFooter", () => {
  it("should appear text footer on the component", async () => {
    render(<Wrapper />);
    const footer = screen.getByText("footer");

    expect(footer).toBeInTheDocument();
  });
});
