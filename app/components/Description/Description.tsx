"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";

function Description(value: any) {
  function findMatch(y: any, list: any) {
    for (let i = 0; i < list.length; i++) {
      if (y === list[i]) {
        return list[i];
      }
    }
    return null;
  }

  let myList = [
    "light rain",
    "moderate rain",
    "heavy intensity rain",
    "very heavy rain",
    "extreme rain",
    "freezing rain",
    "light intensity shower rain",
    "shower rain",
    "heavy intensity shower rain",
    "ragged shower rain",
  ];
  let result = findMatch(value.value, myList);

  let myList2 = [
    "scattered clouds",
    "few clouds",
    "broken clouds",
    "overcast clouds",
  ];
  let result2 = findMatch(value.value, myList2);

  let x;

  if (value.value == "clear sky") {
    x = (
      <Spline
        style={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
        scene="https://draft.spline.design/6YVF9rFIh9M-O92I/scene.splinecode"
      />
    );
  } else if (value.value == result) {
    x = (
      <Spline
        style={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
        scene="https://draft.spline.design/bsn9eRqglje1STtj/scene.splinecode"
      />
    );
  } else if (value.value == result2) {
    x = (
      <Spline
        style={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
        scene="https://draft.spline.design/RDTnp8nEYtIYuw9e/scene.splinecode"
      />
    );
  }

  return <>{x}</>;
}

export default Description;
