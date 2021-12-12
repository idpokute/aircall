import React, { Fragment } from "react";
import styled, { css } from "styled-components";

// export const MySvg = () => {
//   return (
//     <svg
//       className={"Heart"}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 -0.5 8 7"
//       shapeRendering="crispEdges"
//     >
//       <circle r="10"
//       </svg>
//   )
// }
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  position: relative;
`;
const Phone = styled.svg`
  /* align-self: end; */
  width: 15px;
  height: auto;
  margin-top: 10px;
`;
const InboundArrow = styled.svg`
  position: absolute;
  top: 7px;
  right: 7px;
  color: red;
`;
const OutboundArrow = styled.svg`
  position: absolute;
  top: 7px;
  right: 7px;
  color: green;
  transform: rotate(180deg);
`;

const MissedArrow = styled.svg`
  position: absolute;
  top: 7px;
  right: 7px;
  color: gray;
`;

const SlideH = styled.svg`
  width: 80%;
  height: 80%;
  transform: rotate(90deg);
`;

export const Inbound = () => {
  return (
    <IconWrapper>
      <Phone
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="10"
        width="10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
      </Phone>
      <InboundArrow
        width="10"
        height="10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Layer 1</title>
          <line
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_10"
            y2="70.10064"
            x2="50"
            y1="7.89936"
            x1="50"
            fill="none"
          />
          <line
            transform="rotate(45 65.0085 68.0085)"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_13"
            y2="99.10915"
            x2="65.00853"
            y1="36.90787"
            x1="65.00853"
            fill="none"
          />
          <line
            transform="rotate(-45 34.9915 68.0085)"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_14"
            y2="99.10915"
            x2="34.9915"
            y1="36.90787"
            x1="34.9915"
            fill="none"
          />
        </g>
      </InboundArrow>
    </IconWrapper>
  );
};

export const Outbound = () => {
  return (
    <IconWrapper>
      <Phone
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="10"
        width="10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
      </Phone>
      <OutboundArrow
        width="10"
        height="10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Layer 1</title>
          <line
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_10"
            y2="70.10064"
            x2="50"
            y1="7.89936"
            x1="50"
            fill="none"
          />
          <line
            transform="rotate(45 65.0085 68.0085)"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_13"
            y2="99.10915"
            x2="65.00853"
            y1="36.90787"
            x1="65.00853"
            fill="none"
          />
          <line
            transform="rotate(-45 34.9915 68.0085)"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_14"
            y2="99.10915"
            x2="34.9915"
            y1="36.90787"
            x1="34.9915"
            fill="none"
          />
        </g>
      </OutboundArrow>
    </IconWrapper>
  );
};

export const Missed = () => {
  return (
    <IconWrapper>
      <Phone
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="10"
        width="10"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(135deg)" }}
      >
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
      </Phone>

      <MissedArrow
        width="10"
        height="10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Layer 1</title>
          <line
            transform="rotate(-45 22.2415 73.25)"
            stroke="currentColor"
            strokeWidth="15"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_10"
            y2="99.75445"
            x2="22.24148"
            y1="46.74555"
            x1="22.24148"
            fill="none"
          />
          <line
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_13"
            y2="89.10915"
            x2="84.00853"
            y1="26.90787"
            x1="84.00853"
            fill="none"
          />
          <line
            transform="rotate(-90 61.9915 36.0085)"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_14"
            y2="67.10915"
            x2="61.9915"
            y1="4.90787"
            x1="61.9915"
            fill="none"
          />
          <line
            transform="rotate(45 56.0085 66)"
            stroke="currentColor"
            strokeWidth="15"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_15"
            y2="97.10064"
            x2="56.00852"
            y1="34.89936"
            x1="56.00852"
            fill="none"
          />
        </g>
      </MissedArrow>
    </IconWrapper>
  );
};

export const Option = () => {
  return (
    <IconWrapper>
      <SlideH
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="sliders-h"
        className="svg-inline--fa fa-sliders-h fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"
        ></path>
      </SlideH>
    </IconWrapper>
  );
};
