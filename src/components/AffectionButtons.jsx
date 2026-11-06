import { useState } from "react";

const images = {
  hug: "/images/hug.jpg",
  kiss: "/images/kiss.jpg",
  heart: "/images/heart.jpg",
  teddy: "/images/teddy.jpg",
};
export default function AffectionButtons() {
  const [message, setMessage] = useState("");
  const [animation, setAnimation] = useState("");
  const [count, setCount] = useState(0);

  const handleHug = () => {
    setAnimation("hug-animation");
    setMessage("Sending you the tightest hug ever! 🧸❤️");
    setCount((prev) => prev + 1);
  };

  const handleKiss = () => {
    setAnimation("kiss-animation");
    setMessage("MUAHHH! A thousand kisses for you! 💋");
    setCount((prev) => prev + 1);
  };

  const handleExtraLove = () => {
    setAnimation("love-animation");
    setMessage("Surprise! You're loved more than you know! 🥹💕");
    setCount((prev) => prev + 1);
  };

  return (
    <div className="affection-section">

      <div className="affection-heading">
        <h2>A Little Dose of Love 💗</h2>
        <p>Choose what you need right now!</p>
      </div>

      <div className="affection-animation">

        <img
          key={animation + count}
          src={
            animation === "hug-animation"
              ? images.hug
              : animation === "kiss-animation"
              ? images.kiss
              : images.teddy
          }
          alt="Cute love animation"
          className={`affection-image ${animation}`}
        />

      </div>

      <div className="affection-buttons">

        <button
          className="affection-btn hug-btn"
          onClick={handleHug}
        >
          <img src={images.hug} alt="" />
          Hug Me 🫂
        </button>

        <button
          className="affection-btn kiss-btn"
          onClick={handleKiss}
        >
          <img src={images.kiss} alt="" />
          Kiss Me 💋
        </button>

        <button
          className="affection-btn love-btn"
          onClick={handleExtraLove}
        >
          <img src={images.heart} alt="" />
          More Love ❤️
        </button>

      </div>

      {message && (
        <div className="affection-message" key={count}>
          {message}
        </div>
      )}

      <p className="hug-counter">
        Virtual hugs & kisses sent: {count} 💕
      </p>

    </div>
  );
}