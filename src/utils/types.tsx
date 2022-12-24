import { string } from "prop-types";
import React from "react";

export type StarType = {
  name: string; // nazwa podstawowa
  latinName?: string; // łacińska nazwa
  linkToPhoto: string;
  constellation: string;
  description?: string;
};
