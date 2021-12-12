import React from "react";
import styled, { css } from "styled-components";
import { FaPhoneAlt, FaUser, FaCog, FaDotCircle } from "react-icons/fa";

import DialButton from "./components/DialButton.jsx";
import FooterButton from "./components/FooterButton.jsx";

const StyledFooter = styled.div`
  height: 60px;
  border-top: 1px solid #eee;

  .nav {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: stretch;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className="nav">
        <FooterButton icon={<FaPhoneAlt size={25} />} active badge={12} />
        <FooterButton icon={<FaUser size={25} />} />

        <DialButton />

        <FooterButton icon={<FaCog size={25} />} />
        <FooterButton icon={<FaDotCircle size={25} />} />
      </div>
    </StyledFooter>
  );
}
