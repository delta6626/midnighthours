import { useEffect, useState } from "react";

export function useJumpscare(audioDuration: number) {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (!audioDuration || isNaN(audioDuration)) return;

    const triggerJumpscare = () => {
      setTrigger(true);
      setTimeout(() => setTrigger(false), 100); // Reset after quick toggle
    };

    const timeouts: NodeJS.Timeout[] = [];

    const totalScares = 3;
    for (let i = 0; i < totalScares; i++) {
      const delay = Math.random() * (audioDuration - 5);
      const timeout = setTimeout(triggerJumpscare, delay * 1000);
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [audioDuration]);

  return trigger;
}
