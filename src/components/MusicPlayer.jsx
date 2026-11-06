import { useEffect, useRef, useState } from "react";
import { Music2, Pause, Play } from "lucide-react";

export default function MusicPlayer({ playWhen = false }) {

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playWhen) {
      audioRef.current?.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, [playWhen]);

  const toggleMusic = async () => {

    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.log("Music playback failed:", error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source
          src="/music/lover.mp3"
          type="audio/mpeg"
        />
      </audio>

      <div className="music-player">

        <div className={`music-disc ${playing ? "rotating" : ""}`}>
          <Music2 size={20} />
        </div>

        <div className="music-info">
          <span>Now Playing</span>
          <strong>Tum - Murtaza</strong>
        </div>

        <button
          onClick={toggleMusic}
          className="music-toggle"
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? <Pause /> : <Play />}
        </button>

      </div>
    </>
  );
}