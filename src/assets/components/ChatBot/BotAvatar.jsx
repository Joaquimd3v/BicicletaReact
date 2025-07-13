import React from "react";

const BotAvatar = () => (
  <img
    src={`${import.meta.env.BASE_URL}img/MascoteVireon2.png`}
    alt="Bot"
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
    }}
  />
);

export default BotAvatar;
