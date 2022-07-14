import React from "react";

import { CustomFooter } from "../../components/CustomFooter";
import { CustomHeader } from "../../components/CustomHeader";

import { Petrol } from "../Petrol";

export const Layout = (): JSX.Element => {
  return (
    <>
      <CustomHeader title="Welcome to Petrol Station" />
      <section>
        <Petrol />
      </section>
      <CustomFooter />
    </>
  );
};
