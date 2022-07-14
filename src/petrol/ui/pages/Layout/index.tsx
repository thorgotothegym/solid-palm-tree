import React from "react";

import { CustomFooter } from "../../components/CustomFooter";
import { CustomHeader } from "../../components/CustomHeader";

import { Petrol } from "../Petrol";

import "../../../../styles/global.css";

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
