import React from "react";

export default function TeddyBear() {
  return (
    <div className="teddy-container">

      <img
        src="/images/teddy.jpg"
        alt="Cute teddy bear holding a pink heart"
        className="character-image teddy-image"
        draggable="false"
      />

      <div className="character-sparkles">
        💕 ✨ 💕
      </div>

    </div>
  );
}