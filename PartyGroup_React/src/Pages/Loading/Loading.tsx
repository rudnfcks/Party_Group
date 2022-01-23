import React from "react";

import Logo from "../../components/logo/Logo";

function Loading() {
  return (
    <div id="lobby">
      <div style={{ position: "absolute", top: "250px", left: "24px" }}>
        <Logo />
      </div>
    </div>
  );
}

export default Loading;
