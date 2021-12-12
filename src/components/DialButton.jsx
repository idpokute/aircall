import React, { Fragment } from "react";
import styled, { css } from "styled-components";

const width = 65;

const Button = styled.div`
  position: relative;
  top: -20px;
  width: ${width}px;
  height: ${width}px;
  border-radius: 50%;
  border: 2px solid #eee;
  box-shadow: inset 0 0 0 5px white, 0 10px 30px 0 #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3fbb20;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DialIcon = () => {
  const viewportW = 80;
  const viewportH = 80;
  const viewBox = `0 0 ${viewportW} ${viewportH}`;

  return (
    <svg
      className="dial-dots"
      viewBox={viewBox}
      width={width - 20}
      height={width - 20}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="7" fill="white" />
      <circle cx="40" cy="20" r="7" fill="white" />
      <circle cx="60" cy="20" r="7" fill="white" />

      <circle cx="20" cy="40" r="7" fill="white" />
      <circle cx="40" cy="40" r="7" fill="white" />
      <circle cx="60" cy="40" r="7" fill="white" />

      <circle cx="20" cy="60" r="7" fill="white" />
      <circle cx="40" cy="60" r="7" fill="white" />
      <circle cx="60" cy="60" r="7" fill="white" />
    </svg>
  );
};

export default function DialButton() {
  return (
    <Button>
      <a>{DialIcon()}</a>
    </Button>
  );
}
