import React from "react";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black">
      <BeatLoader color="#FF0000" css={override} size={30} />
    </div>
  );
};

export default LoadingScreen;
