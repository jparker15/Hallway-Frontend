import React, { useState } from "react";

const BorderCard = (props) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = () => {
    if (props.hoverable) {
      setHover(true);
    }
  };

  const onMouseLeave = () => {
    if (props.hoverable) {
      if (props.hoverable) {
        setHover(false);
      }
    }
  };

  return (
    <div
      style={
        hover
          ? {
              ...myStyle.card,
              ...myStyle.hover,
              ...props.style,
              overflow: "hidden",
            }
          : {
              ...myStyle.card,
              ...myStyle.noHover,
              ...props.style,
              overflow: "hidden",
            }
      }
      onClick={props.onClick}
      onMouseEnter={onMouseEnter()}
      onMouseLeave={onMouseLeave()}
    >
      {props.children}
    </div>
  );
}

const myStyle = {
  card: {
    border: "1px solid #171717",
    borderRadius: 5,
    marginBottom: 25,
    padding: "0 8px",
    width: "80%",
    maxWidth: 500,
    backgroundColor: "#f7f7f7",
  },
  noHover: {
    boxShadow: "1px 1px 20px rgba(91, 91, 91, 0.5)",
    transition: "box-shadow .5s",
  },
  hover: {
    boxShadow: "1px 1px 20px rgba(91, 91, 91, 0.25)",
    transition: "box-shadow .5s",
  },
};

export default BorderCard;
