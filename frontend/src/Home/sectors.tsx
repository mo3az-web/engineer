import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  {
    image: "/fire.jpeg",
    title: "هندسة الإطفاء والحريق",
  },
  {
    image: "/RE.jpeg",
    title: "هندسة التكييف والتبريد",
  },
  {
    image: "/PE.jpeg",
    title: "هندسة السباكة",
  },
];

export default function Sectors() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".sector-card");

      cards.forEach((card, index) => {
        const image = card.querySelector(".sector-image");
        const overlay = card.querySelector(".sector-overlay");
        const content = card.querySelector(".sector-content");

        // دخول السيكشن
        gsap.fromTo(
          card,
          {
            yPercent: 1,
          },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top top",
              scrub: 1.2,
            },
          }
        );

        // حركة الصورة
        gsap.fromTo(
          image,
          {
            scale: 1.25,
            yPercent: 8,
          },
          {
            scale: 1,
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top top",
              scrub: 1.5,
            },
          }
        );

        // الـ overlay يخف تدريجيًا
        gsap.fromTo(
          overlay,
          {
            opacity: 0.8,
          },
          {
            opacity: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top top",
              scrub: 1,
            },
          }
        );

        // دخول العنوان
        gsap.fromTo(
          content,
          {
            y: 100,
            opacity: 0,
            filter: "blur(12px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );

        // السيكشن السابقة ترجع للخلف
        if (index > 0) {
          const previousCard = cards[index - 1];

          gsap.to(previousCard, {
            scale: 0.94,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top top",
              scrub: 1.2,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative"
    >
      {/* Intro */}
      <div className="relative z-0 flex h-screen items-center justify-center overflow-hidden bg-black">
        <h2 className="text-center text-7xl font-bold text-white">
          قطاعات عملنا
        </h2>
      </div>

      {/* Sectors */}
      {sectors.map((sector, index) => (
        <div
          key={index}
          className="sector-card sticky top-0 z-10 flex h-screen items-center justify-center overflow-hidden bg-black"
        >
          {/* Image */}
          <div
            className="sector-image absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url(${sector.image})`,
            }}
          />

          {/* Dark Overlay */}
          <div className="sector-overlay absolute inset-0 bg-black will-change-[opacity]" />

          {/* Content */}
          <div className="sector-content relative z-10 will-change-transform">
            <h2 className="px-6 text-center text-5xl font-bold tracking-tight text-white md:text-7xl">
              {sector.title}
            </h2>
          </div>

          {/* Number */}
          <div className="absolute bottom-10 left-10 z-10">
            <span className="text-sm font-medium tracking-[0.3em] text-white/70">
              0{index + 1}
            </span>
          </div>

          {/* Scroll line */}
          <div className="absolute bottom-10 right-10 z-10 h-20 w-px overflow-hidden bg-white/20">
            <div className="h-full w-full origin-top scale-y-50 bg-white" />
          </div>
        </div>
      ))}
    </section>
  );
}