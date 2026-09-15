
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      
      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Eyebrow */}
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Engineering & Consulting
        </p>

        {/* Title */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-black md:text-7xl lg:text-8xl">
          المركز الهندسي
          <br />
          <span className="text-black/70">
            للكهروميكانيكا
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-black/55 md:text-lg">
          حلول هندسية متكاملة في أنظمة الإطفاء والحريق والتكييف
          والسباكة والأعمال الكهروميكانيكية.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/projects"
            className="bg-black px-8 py-4 font-medium text-white transition-colors duration-300 hover:bg-blue-600"
          >
            اكتشف مشاريعنا
          </Link>

          <Link
            to="/contact"
            className="border border-black/20 px-8 py-4 font-medium text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            اطلب استشارة
          </Link>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-black/35">
          <span className="text-[10px] uppercase tracking-[0.4em]">
            Scroll
          </span>

          <div className="h-10 w-px bg-black/30" />
        </div>
      </div>

    </section>
  );
};

export default Hero;

