
import { gsap } from "gsap";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      gsap.to("#cursor", {
        x: clientX - 10,
        y: clientY - 10,
        duration: 0.5,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="fixed top-0 left-0 h-[20px] w-[20px] rounded-full bg-black z-50 pointer-events-none"
    />
  );
};

export default Cursor;
