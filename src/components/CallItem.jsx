import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { format } from "date-fns";
import { FaEllipsisV } from "react-icons/fa";
import Switch from "react-switch";
import { Inbound, Outbound, Missed } from "../icons";
import { updateArchived } from "../actions/call";

const CallItemBlock = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 8px;
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 50px;

  .header {
    width: 50px;
    height: 35px;
    flex-shrink: 0;
  }

  .body {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .msg {
      min-width: 0;

      p {
        margin: 4px 0;
        padding: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #aaa;
      }
    }
  }

  .switch {
    width: 100px;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .time {
    margin-left: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 5px;
    color: #aaa;

    .ampm {
      border: 1px solid #aaa;
      border-right: none;
      font-size: 0.8em;
      padding: 0.1em;
      font-weight: bold;

      /* border-top:1px  solid gray;
      boder-left: 1px solid gray;
      border-bottom: 1px solid  */
      border-radius: 3px;
    }
  }
`;

export default function CallItem({ call }) {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {}, []);

  let {
    id,
    direction,
    from,
    to,
    via,
    duration,
    is_archived,
    call_type,
    created_at,
  } = call;

  created_at = new Date(created_at);
  let description;
  if (direction === "inbound") {
    description += "via ";
  } else {
  }

  const getPerson = () => {
    if (call_type === "voicemail") {
      return "Voice Mail";
    }

    if (direction === "inbound") {
      return from;
    } else if (direction === "outbound") {
      return to;
    }
  };
  const getMsg = () => {
    let msg = [];

    if (direction === "inbound") {
      msg.push("to " + to);
    } else if (direction === "outbound") {
      msg.push("from " + from);
    }

    if (via) {
      msg.push("via " + via);
    }

    return msg.join(" ");
  };
  const openOption = () => {
    setIsMenuOpen(() => !isMenuOpen);
    // dispatch(updateArchived(call));
  };
  const toggleArchived = () => {
    dispatch(updateArchived(call));
  };

  return (
    <CallItemBlock onClick={openOption}>
      <div className={"header"}>
        {call_type === "missed" ? (
          <Missed />
        ) : direction == "inbound" ? (
          <Inbound />
        ) : (
          <Outbound />
        )}
      </div>
      <div className={"body"}>
        <div className="person">{getPerson()}</div>
        <div className="msg">
          <p>{getMsg()} asdf asdf adsf</p>
        </div>
      </div>
      {isMenuOpen ? (
        <div className={"switch"}>
          <small>Archive</small>

          <Switch onChange={toggleArchived} checked={is_archived} />
        </div>
      ) : (
        <div className={"time"}>
          <FaEllipsisV />
          {format(created_at, "HH:mm")}
          <span className="ampm">{format(created_at, "a")}</span>
        </div>
      )}
    </CallItemBlock>
  );
}
