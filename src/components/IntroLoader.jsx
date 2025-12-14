import { useEffect } from "react";

export default function IntroLoader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4500); // match GIF duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <img
        src="/intro.gif"
        alt="NIK ARCH & DESIGN"
        className="w-64 md:w-80 object-contain"
      />
    </div>
  );
}
