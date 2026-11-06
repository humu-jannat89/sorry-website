import { useState } from "react";

import Envelope from "./components/Envelope";
import Monkey from "./components/Monkey";
import TeddyBear from "./components/TeddyBear";
import FloatingHearts from "./components/FloatingHearts";
import Typewriter from "./components/Typewriter";
import MusicPlayer from "./components/MusicPlayer";
import AffectionButtons from "./components/AffectionButtons";

import {
  Heart,
  Sparkles,
  Stars,
} from "lucide-react";

import "./App.css";

function App() {
  const [scene, setScene] = useState("envelope");
  const [noClicked, setNoClicked] = useState(false);
  const [forgiven, setForgiven] = useState(false);

  const handleYes = () => {
    setScene("teddy");
  };

  const handleNo = () => {
    setNoClicked(true);
  };

  const handleForgive = () => {
    setForgiven(true);
  };

  const restartStory = () => {
    setScene("envelope");
    setNoClicked(false);
    setForgiven(false);
  };

  return (
    <main className="app">

      {/* Background decorations */}

      <div className="background-glow"></div>

      <FloatingHearts />

      <div className="floating-stars">
        <Stars />
        <Sparkles />
        <Stars />
        <Sparkles />
      </div>

      {/* Background music */}

      {scene === "teddy" && (
        <MusicPlayer playWhen={scene === "teddy"} />
      )}

      {/* SCENE 1: ENVELOPE */}

      {scene === "envelope" && (

        <section className="card envelope-card">

          <div className="top-decoration">
            <Heart fill="currentColor" />
            A SPECIAL DELIVERY
            <Heart fill="currentColor" />
          </div>

          <div className="envelope-intro">

            <div className="envelope-emoji">
              💌
            </div>

            <h1>A Little Surprise!</h1>

            <p>
              Someone has a little message
              waiting just for you.
            </p>

            <p className="envelope-hint">
              Psst... open it! 🥺
            </p>

          </div>

          <Envelope
            onOpen={() => setScene("monkey")}
          />

          <div className="card-footer">
            A little letter filled with love.
          </div>

        </section>

      )}

      {/* SCENE 2: MONKEY */}

      {scene === "monkey" && (

        <section className="card monkey-card">

          <div className="top-decoration">
            <Sparkles />
            HEY, YOU!
            <Sparkles />
          </div>

          <div className="character-wrapper">
            <Monkey />
          </div>

          <h1>Hellooo! 🐵</h1>

          {!noClicked ? (

            <>

              <p className="main-question">

                <Typewriter
                  text="Are you still angry with me? 🥺"
                  speed={65}
                />

              </p>

              <p className="sub-question">
                Please think before answering...
                I have something to tell you. 💌
              </p>

              <div className="button-group">

                <button
                  className="yes-button"
                  onClick={handleYes}
                >
                  YES 😤
                </button>

                <button
                  className="no-button"
                  onClick={handleNo}
                >
                  NO 🤭
                </button>

              </div>

            </>

          ) : (

            <div className="funny-response">

              <h2>O REALLY? 😏</h2>

              <p>
                Then I can fight with you more!
                Do you know after fighting 
                with you i feel happy today:)
                moja lagche amr.
              </p>

              <p>
                I love annoying you anyway!
                Hehehe! 😁
              </p>

              <div className="big-emoji">
                😈
              </div>

              <p className="funny-small">
                You can't escape my nonsense!
              </p>

              <button
                className="sorry-button"
                onClick={handleYes}
              >
                Okay, I have a surprise! 💗
              </button>

            </div>

          )}

          <div className="card-footer">
            Made with stubbornness and lots of love.
          </div>

        </section>

      )}

      {/* SCENE 3: TEDDY BEAR */}

      {scene === "teddy" && !forgiven && (

        <section className="card teddy-card">

          <div className="top-decoration">
            <Heart fill="currentColor" />
            A LITTLE APOLOGY
            <Heart fill="currentColor" />
          </div>

          <div className="character-wrapper">
            <TeddyBear />
          </div>

          <h1>I'm Sorry! 🥺</h1>

          <p className="teddy-intro">
            <Typewriter
              text="Hey, my favourite human..."
              speed={65}
            />
          </p>

          <div className="letter-content">

            <p>
              You know what?
              <strong> I love you so much. ❤️</strong>
            </p>

            <p>
              That's why I love fighting with you,
              annoying you and making you angry
              sometimes. 🤭And i don't love when you give  important anything more than me :)....
              But i tell myself(AMI UNDERSTANDING HOWAR TRY KORBO.JIKANE AMR BHAIDR
              SHATAE PARI NA APNAKE KI BOLBO).
              And onno kew o ke khujar time koi amr!! 
              manushjon tho amke khuje🤭
              i need my jaan only noone else understood.
            </p>

            <p>
              But please remember,
              you're very special to me.
            </p>

            <div className="hindi-message">

              <span>My little confession...</span>

              <h2>
                Aap ke bina kaun hai mera? 🥹❤️
              </h2>

            </div>

            <p className="naughty-text">
              You're my favourite person to irritate!
              Don't take that position away from me. 😌
            </p>

            <p>
              Now please forgive this silly person! 💗
            </p>

          </div>
          <AffectionButtons />

          <div className="forgive-section">

            <h3>
              So... will you forgive me?
            </h3>

            <button
              className="forgive-button"
              onClick={handleForgive}
            >
              YES, I FORGIVE YOU! ❤️
            </button>

            <p className="small-note">
              Sending you a thousand virtual hugs. 🧸
            </p>

          </div>

        </section>

      )}

      {/* SCENE 4: HAPPY ENDING */}

      {scene === "teddy" && forgiven && (

        <section className="card final-card">

          <div className="celebration">
            🎉 💗 ✨ 💕 🎉
          </div>

          <div className="character-wrapper final-teddy">
            <TeddyBear />
          </div>

          <h1>YAYYYYY! 🥹</h1>

          <h2>
            My favourite human forgave me!
          </h2>

          <p className="final-description">
            I knew you couldn't stay angry
            with me forever.
            Hehehe! 🤭
          </p>

          <div className="big-heart">
            ❤️
          </div>

          <div className="final-message">

            <h2>
              A Little Sorry,
              A Lot of Love.
            </h2>

            <p>
              You're stuck with me! 😚
            </p>

          </div>

          <div className="final-decoration">
            💗 🧸 💗
          </div>

          <button
            className="restart-button"
            onClick={restartStory}
          >
            Relive Our Little Story 💌
          </button>

          <div className="card-footer">
            Forever your favourite troublemaker.
          </div>

        </section>

      )}

    </main>
  );
}

export default App;