import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToTop = (props) => {
  const [isHover, setHover] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FontAwesomeIcon
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      color="#4286f7"
      onClick={scrollTop}
      icon={["fas", "chevron-circle-up"]}
      style={{
        ...styles.toTop,
        display: showScroll ? "flex" : "none",
        opacity: isHover ? 1 : 0.6,
      }}
    />
  );
};

const styles = {
  toTop: {
    height: 50,
    display: "flex",
    position: "fixed",
    width: 50,
    bottom: 30,
    right: 30,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    cursor: "pointer",
    animation: "fadeIn 0.3s",
    transition: "opacity 0.4s",
    // fontSize: "2rem",
  },
};

export default ToTop;
