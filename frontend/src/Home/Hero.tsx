import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <img
        src="/hero.jpeg"
        alt="Engineering project"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end justify-center px-6 pb-28 md:pb-32">
        <div className="max-w-5xl text-center text-black">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-blue-600" />

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              Engineering & Consulting
            </p>

            <span className="h-px w-12 bg-blue-600" />
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-[1.15] tracking-tight text-black drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)] md:text-7xl lg:text-8xl">
            المركز الهندسي
            <br />
            <span className="text-black/80">
              للكهروميكانيكا
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-black/70 drop-shadow-[0_1px_5px_rgba(255,255,255,0.8)] md:text-lg">
            حلول هندسية متكاملة في أنظمة الإطفاء والحريق والتكييف
            والسباكة والأعمال الكهروميكانيكية.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              to="/projects"
              className="group flex items-center gap-3 bg-black px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-blue-600"
            >
              <span>اكتشف مشاريعنا</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/contact"
              className="border border-black/30 bg-white/60 px-8 py-4 font-medium text-black backdrop-blur-md transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              اطلب استشارة
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-black/50">
          <span className="text-[10px] uppercase tracking-[0.4em]">
            Scroll
          </span>

          <div className="h-12 w-px bg-gradient-to-b from-black/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;