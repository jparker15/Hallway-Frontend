import React from "react";

function Logo({ link, height = "", width = "" }) {
  return (
    <img
      src={link}
      style={{
        height: `${height}`,
        width: `${width}`,
        boxShadow: "2px 2px 10px rgba(50, 50, 50 0.6)",
      }}
      alt="BLB, Black Lives Biz"
    />
  );
}

export default Logo;
