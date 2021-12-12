import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import CallList from "./CallList.jsx";

const Container = styled.div`
  /* flex: 1 1 auto; */
  /* min-height: 100px; */
  /* height: 0px;
  padding: 20px; */
  /* overflow-y: auto; */
  height: calc(100% - 104px);
  background: #eee;
  overflow-y: auto;
`;

export default function ContainerView() {
  return (
    <Container>
      <CallList />
    </Container>
  );
}
