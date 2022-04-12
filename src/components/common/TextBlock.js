import React from "react";
import BorderCard from "./BorderCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextBlock = (props) => {
  return (
    <BorderCard
      onClick={props.onClick}
      style={{
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 4,
        marginRight: 4,
        backgroundColor: "#4286f7",
        width: "auto",
        maxWidth: "none",
        padding: "0px 8px",
        border: "none",
        borderRadius: 10,
        ...props.borderCardStyle
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <p
          style={{
            color: "#f1f1f1",
            marginRight: 6,
            fontWeight: "bold",
            fontSize: 16,
            ...props.textStyle
          }}
        >
          {props.text}
        </p>
        {props.hideX ? null : (
          <FontAwesomeIcon
            icon={["fas", "times"]}
            style={{ cursor: "pointer", fontSize: 16 }}
            color="#f1f1f1"
            onClick={() => props.onRemove({ target: { value: props.text } })}
          />
        )}
      </div>
    </BorderCard>
  );
};

export default TextBlock;
