export default function FloatingHearts() {

  const hearts = ["💗", "💕", "💖", "✨", "💓", "🩷"];

  return (
    <div className="floating-hearts">
      {Array.from({ length: 18 }).map((_, index) => (

        <span
          key={index}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        >
          {hearts[index % hearts.length]}
        </span>

      ))}
    </div>
  );
}