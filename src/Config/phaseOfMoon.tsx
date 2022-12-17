import React from "react";
import {
  mdiMoonFirstQuarter,
  mdiMoonFull,
  mdiMoonLastQuarter,
  mdiMoonWaningCrescent,
  mdiMoonWaningGibbous,
  mdiMoonWaxingCrescent,
  mdiMoonWaxingGibbous,
} from "@mdi/js";

export const phaseOfMoonData = [
  {
    name: "pierwsza kwadra",
    icon: mdiMoonFirstQuarter,
  },
  {
    name: "pełny księżyc",
    icon: mdiMoonFull,
  },
  {
    name: "ostatnia kwadra",
    icon: mdiMoonLastQuarter,
  },
  {
    name: "zanikający półksiężyc",
    icon: mdiMoonWaningCrescent,
  },
  {
    name: "gubiący się księżyc",
    icon: mdiMoonWaningGibbous,
  },
  {
    name: "półksiężyc woskujący",
    icon: mdiMoonWaxingCrescent,
  },
  {
    name: "woskujący księżyc",
    icon: mdiMoonWaxingGibbous,
  },
];
