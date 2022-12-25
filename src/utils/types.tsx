import { string } from "prop-types";
import React from "react";

export type StarType = {
  name: string; // nazwa podstawowa
  latinName?: string; // łacińska nazwa
  linkToPhoto: string;
  constellation: string;
  description?: string;
};

export type Observation = {
  _id?: any,
  date: any,
  location: {
    closestCity: string,
    exactLocation: string,
  },
  weatherConditions: {
    cloudLevel: string,
    precipitation: string, // opady
    wind: number,
    temperature: number,
    fogDensity: string // gęstość mgły
    visibility: string,
    phaseOfTheMoon: string
  }
  visibilityStars: string
}
