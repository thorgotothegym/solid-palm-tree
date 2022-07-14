import React from "react";

interface CustomHeaderProp {
  title: string;
}

export const CustomHeader = ({ title }: CustomHeaderProp): JSX.Element => {
  return <header>{title}</header>;
};
