import React from "react";

export const Footer = () => {
  // return React.createElement("footer", null, "We're currenly open!");
  return <footer>{new Date().toLocaleTimeString()} We're currenly open</footer>;
};
