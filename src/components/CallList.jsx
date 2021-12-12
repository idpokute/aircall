import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
const { format, parseISO } = require("date-fns");
// import { createSelector } from "@reduxjs/toolkit";
import styled, { css } from "styled-components";
import axios from "axios";

import { getInbox } from "../actions/call";
// import callSlice from "../reducers/";
import CallItem from "./CallItem.jsx";

const CallListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  /* background-color: #fdfdfc; */
`;
const CallDateBlock = styled.div`
  display: flex;
  &:before,
  &:after {
    content: "";
    flex: 1;
  }
  margin: 1em -1em;
  &:before,
  &:after {
    height: 0px;
    border-top: 1px dotted #aaa;
    margin: 0 1em;
  }

  &:before,
  &:after {
    /* background: #aaa; */
  }

  justify-content: center;
  align-items: center;
  color: #aaa;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  margin: 10px 0;
`;

export default function CallList() {
  const calls = useSelector((state) => state.calls.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInbox());
  }, []);

  const renderGroupCall = () => {
    let output = [];
    let prevDate = "";
    let i = 0;
    while (i < calls.length) {
      const date = format(parseISO(calls[i].created_at), "MMM, dd yyyy");
      if (date != prevDate) {
        prevDate = date;
        output.push(<CallDateBlock key={date}>{date}</CallDateBlock>);
      }

      output.push(<CallItem key={calls[i].id} call={calls[i]} />);
      i++;
    }
    return output;
  };

  return (
    <CallListBlock>
      {renderGroupCall() && renderGroupCall().map((v) => v)}
    </CallListBlock>
  );
}
