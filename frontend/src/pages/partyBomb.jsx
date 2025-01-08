import confetti from "canvas-confetti";

 export const triggerConfetti = () => {
 
  // Bottom left burst
  confetti({
    particleCount: 350,
    spread: 100,
    origin: { x: 0, y: 1 }, // Bottom left
    angle: 45,
  });

  // Bottom right burst
  confetti({
    particleCount: 350,
    spread: 100,
    origin: { x: 1, y: 1 }, // Bottom right
    angle: 120,
  });
};


