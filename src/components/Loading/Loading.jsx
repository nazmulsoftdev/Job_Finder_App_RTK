import React from "react";
import { LineWave } from "react-loader-spinner";

function Loading() {
  return (
    <LineWave
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="line-wave"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      firstLineColor="green"
      middleLineColor="blue"
      lastLineColor="red"
    />
  );
}

export default Loading;
