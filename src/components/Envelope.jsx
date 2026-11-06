import { useState } from "react";

export default function Envelope({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 1300);
  };

  return (
    <div className="envelope-scene">

      <div className="envelope-heading">
        <h1>You've Got Mail! 💌</h1>
        <p>Someone has a little message for you...</p>
      </div>

      <div
        className={`envelope ${opened ? "opened" : ""}`}
        onClick={handleOpen}
      >

        <div className="envelope-back"></div>

        <div className="letter-paper">
          <span>Hey, You! 🥺</span>
          <p>I have something to tell you...</p>
          <span>With love, ❤️</span>
        </div>

        <div className="envelope-front"></div>

        <div className="envelope-flap"></div>

        <div className="envelope-heart">♥</div>

      </div>

      {!opened && (
        <button className="open-envelope-btn" onClick={handleOpen}>
          Open your little letter 💗
        </button>
      )}

      {opened && (
        <p className="opening-message">
          A little surprise is waiting for you... ✨
        </p>
      )}

    </div>
  );
}   