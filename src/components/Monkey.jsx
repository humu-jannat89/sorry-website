import React from "react";

export default function Monkey() {
  return (
    <div className="monkey-container">

      <img
        src="/images/monkey.jpg"
        alt="Cute baby monkey holding a pink heart"
        className="character-image monkey-image"
        draggable="false"
      />

      <div className="character-sparkles">
        ✨ 💗 ✨
      </div>

    </div>
  );
}