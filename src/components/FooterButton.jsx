import React from "react";
import styled, { css } from "styled-components";
import { MdOutlinePersonOutline } from "react-icons/md";

const Button = styled.div`
  position: relative;
  display: flex;

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
const Badge = styled.span`
  position: absolute;
  top: 5px;
  right: -10px;
  background: red;
  border-radius: 10px;
  color: white;
  font-size: 4px;
  min-width: 13px;
  text-align: center;
  padding: 5px;
`;
const ActiveBar = styled.span`
  position: absolute;
  bottom: 0px;
  height: 4px;
  width: 100%;
  background-color: #41bd20;
`;

export default function FooterButton({ icon, active, badge }) {
  return (
    <Button className={"active"}>
      <a>
        <span className="Icon">{icon}</span>
        {badge && <Badge>{badge}</Badge>}
        {active && <ActiveBar />}
      </a>
    </Button>
  );
}
