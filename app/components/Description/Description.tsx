"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";

function Description(value: any) {
 /* let x;

  if (value.value === "clear sky") {
    x =   <Spline scene="https://prod.spline.design/nvZfritQaXrT0JYz/scene.splinecode" />;
  } else if (
    value.value == "scattered clouds" ||
    "few clouds" ||
    "broken clouds" ||
    "overcast clouds"
  ) {
    x = (
      <Spline scene="https://prod.spline.design/vr4vxtymUGA81lKs/scene.splinecode" />
    );
  } else if (
    value.value == "light rain" ||
    "moderate rain" ||
    "heavy intensity rain" ||
    "very heavy rain" ||
    "extreme rain" ||
    "freezing rain" ||
    "light intensity shower rain" ||
    "shower rain" ||
    "heavy intensity shower rain" ||
    "ragged shower rain"
  ) {
    x =  <Spline scene="https://prod.spline.design/vr4vxtymUGA81lKs/scene.splinecode" />;
  }
*/

  return(
    <>
    {value.value == 'sunny' && <p>sunny1!!!!!</p>}
    {value.value == 'rainy' && <p>rainy!!!!!</p>}
    
    </>
  );
}

export default Description;
