import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background Image */}
      <img
        src="/hero.jpeg"
        alt="Engineering"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Eyebrow */}
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Engineering & Consulting
        </p>

        {/* Title */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
          المركز الهندسي
          <br />

          <span className="text-white/70">
            للكهروميكانيكا
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
          حلول هندسية متكاملة في أنظمة الإطفاء والحريق والتكييف
          والسباكة والأعمال الكهروميكانيكية.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            to="/projects"
            className="bg-white px-8 py-4 font-medium text-black transition-colors duration-300 hover:bg-blue-600 hover:text-white"
          >
            اكتشف مشاريعنا
          </Link>

          <Link
            to="/contact"
            className="border border-white/40 px-8 py-4 font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            اطلب استشارة
          </Link>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.4em]">
            Scroll
          </span>

          <div className="h-10 w-px bg-white/40" />
        </div>
      </div>

    </section>
  );
};

export default Hero;